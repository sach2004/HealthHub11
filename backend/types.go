package main

type Env struct {
	User     string
	Password string
	DB       string
	PORT     string
	URL      string
}

type Patient struct {
	ID          string `json:"id"`
	Name        string `json:"name"`
	GovID       string `json:"gov_id"`
	Problems    string `json:"problems"`
	Diagnosis   string `json:"diagnosis"`
	Doctor      string `json:"doctor"`
	Medications string `json:"medications"`
	Notes       string `json:"notes"`
	CreatedAt   string `json:"created_at"`
}

type Doctor struct {
	ID    string `json:"id"`
	Name  string `json:"name"`
	GovID string `json:"gov_id"`
}

type User struct {
	ID    string `json:"id"`
	Name  string `json:"name"`
	Email string `json:"email"`
	Phone string `json:"phone"`
	Dob   string `json:"dob"`
}

type CreatePatientRequest struct {
	Name        string `json:"name"`
	GovID       string `json:"gov_id"`
	Problems    string `json:"problems"`
	Doctor      string `json:"doctor"`
	Diagnosis   string `json:"diagnosis"`
	Medications string `json:"medications"`
	Notes       string `json:"notes"`
}

type UpdatePatientDiagnosisRequest struct {
	Diagnosis   string `json:"diagnosis"`
	Medications string `json:"medications"`
	Notes       string `json:"notes"`
}
