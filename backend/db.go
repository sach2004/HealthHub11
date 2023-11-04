package main

import (
	"database/sql"
	"fmt"

	_ "github.com/lib/pq"
)

type DBInstance struct {
	db *sql.DB
}

func NewStoreInstance() DBInstance {
	env := GetEnv()
	connStr := fmt.Sprintf("user=%s password=%s host=%s dbname=%s port=%s sslmode=disable", env.User, env.Password, env.URL, env.DB, env.PORT)
	fmt.Println(connStr)
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		return DBInstance{}
	}

	return DBInstance{db}
}

func (pq *DBInstance) createTable() error {
	query := `
		CREATE TABLE IF NOT EXISTS users (
			id TEXT PRIMARY KEY,
			name TEXT,
			email TEXT,
			phone TEXT
		);

		CREATE TABLE IF NOT EXISTS doctors (
			id TEXT PRIMARY KEY,
			name TEXT,
			gov_id TEXT
		);

		CREATE TABLE IF NOT EXISTS patients (
			id TEXT PRIMARY KEY,
			name TEXT,
			gov_id TEXT REFERENCES users(id),
			problems TEXT,
			diagnosis TEXT,	
			doctor TEXT REFERENCES doctors(id),
			medications TEXT,
			notes TEXT,
			created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
		);
`

	_, err := pq.db.Exec(query)

	return err
}

func (pq *DBInstance) CreatePatient(patient CreatePatientRequest) (string, error) {
	query := `
		INSERT INTO patients (id, name, gov_id, problems, doctor, diagnosis, medications, notes)
		VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
	`
	patientId := RanHash()

	_, err := pq.db.Exec(query, patientId, patient.Name, patient.GovID, patient.Problems, patient.Doctor, patient.Diagnosis, patient.Medications, patient.Notes)

	return patientId, err
}

func (pq *DBInstance) GetPatients() ([]Patient, error) {
	query := `
		SELECT * FROM patients
	`

	var patients []Patient

	rows, err := pq.db.Query(query)
	if err != nil {
		return nil, err
	}

	for rows.Next() {
		var patient Patient
		err := rows.Scan(&patient.ID, &patient.Name, &patient.GovID, &patient.Problems, &patient.Diagnosis, &patient.Doctor, &patient.Medications, &patient.Notes, &patient.CreatedAt)
		if err != nil {
			return nil, err
		}

		patients = append(patients, patient)
	}

	return patients, nil
}

func (pq *DBInstance) GetPatient(id string) (Patient, error) {
	query := `
		SELECT * FROM patients WHERE id = $1
	`

	var patient Patient

	row := pq.db.QueryRow(query, id)
	err := row.Scan(&patient.ID, &patient.Name, &patient.GovID, &patient.Problems, &patient.Diagnosis, &patient.Doctor, &patient.Medications, &patient.Notes, &patient.CreatedAt)
	if err != nil {
		return Patient{}, err
	}

	return patient, nil
}

func (pq *DBInstance) UpdatePatient(id string, patient *UpdatePatientDiagnosisRequest) error {
	query := `
		UPDATE patients SET diagnosis = $1, medications = $2, notes = $3 WHERE id = $4
	`

	_, err := pq.db.Exec(query, patient.Diagnosis, patient.Medications, patient.Notes, id)

	return err
}

func (pq *DBInstance) GetUser(id string) (User, error) {
	query := `
		SELECT * FROM users WHERE id = $1
	`

	var user User

	row := pq.db.QueryRow(query, id)
	err := row.Scan(&user.ID, &user.Name, &user.Email, &user.Phone, &user.Dob)
	if err != nil {
		return User{}, err
	}

	return user, nil
}

func (pq *DBInstance) GetDoctor(id string) (Doctor, error) {
	query := `
		SELECT * FROM doctors WHERE id = $1
	`

	var doctor Doctor

	row := pq.db.QueryRow(query, id)
	err := row.Scan(&doctor.ID, &doctor.Name, &doctor.GovID)
	if err != nil {
		return Doctor{}, err
	}

	return doctor, nil
}
