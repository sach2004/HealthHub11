package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/gin-contrib/cors"
)

type ApiServer struct {
	store      DBInstance
	listenAddr string
}

func NewApiServer() *ApiServer {
	return &ApiServer{
		store:      NewStoreInstance(),
		listenAddr: "localhost:8080",
	}
}

func (api *ApiServer) CreatePatient(c *gin.Context) {
	var patient CreatePatientRequest

	if err := c.ShouldBindJSON(&patient); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	patientId, err := api.store.CreatePatient(patient)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"id": patientId})
}

func (api *ApiServer) GetUser(c *gin.Context) {
	id := c.Param("id")

	user, err := api.store.GetUser(id)

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"user": user})
}

func (api *ApiServer) GetDoctor(c *gin.Context) {
	id := c.Param("id")

	doctor, err := api.store.GetDoctor(id)

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"doctor": doctor})
}

func (api *ApiServer) GetPatient(c *gin.Context) {
	id := c.Param("id")

	patient, err := api.store.GetPatient(id)

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"patient": patient})
}

func (api *ApiServer) UpdatePatient(c *gin.Context) {
	id := c.Param("id")

	var patient UpdatePatientDiagnosisRequest

	if err := c.ShouldBindJSON(&patient); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	err := api.store.UpdatePatient(id, &patient)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"status": "ok"})
}

func (api *ApiServer) GetPatients(c *gin.Context) {
	patients, err := api.store.GetPatients()

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"patients": patients})
}

func (api *ApiServer) Start() {
	err := api.store.createTable()
	if err != nil {
		panic(err)
	}

	r := gin.Default()

	config := cors.DefaultConfig()
	config.AllowOrigins = []string{"*"}
	config.AllowMethods = []string{"GET", "POST", "PUT"}
	config.AllowHeaders = []string{"Origin", "Content-Length", "Content-Type", "Authorization"}

	r.Use(cors.New(config))

	r.GET("/health", func(ctx *gin.Context) {
		ctx.JSON(200, gin.H{
			"message": "ok",
		})
	})

	r.POST("/patients", api.CreatePatient)
	r.GET("/patients", api.GetPatients)

	r.GET("/patients/:id", api.GetPatient)
	r.PUT("/patients/:id", api.UpdatePatient)

	r.GET("/users/:id", api.GetUser)
	r.GET("/doctors/:id", api.GetDoctor)

	err = r.Run(api.listenAddr)
	if err != nil {
		panic(err)
	}
}
