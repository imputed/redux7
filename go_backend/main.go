package main

import (
	"context"
	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"log"
	"time"
)

type Query struct {
	ctx    context.Context
	client *mongo.Client
	close  context.CancelFunc
	err    error
}

func getQuery() Query {
	q := Query{}
	q.ctx, q.close = context.WithTimeout(context.Background(), 10*time.Second)
	q.client, q.err = mongo.Connect(q.ctx, options.Client().ApplyURI("mongodb://localhost:27017"))
	return q
}

func getUser(c *gin.Context) {
	q := getQuery()
	defer q.close()

	collection := q.client.Database("test").Collection("users")
	cur, err := collection.Find(q.ctx, bson.M{})
	if err != nil {
		log.Println(err)
	} else {
		re := []bson.D{}
		for cur.Next(q.ctx) {
			var result bson.D
			err := cur.Decode(&result)
			if err != nil {
				log.Fatal(err)
			} else {
				re = append(re, result)
			}
			if err := cur.Err(); err != nil {
				log.Fatal(err)
			}
		}
		c.JSON(200, gin.H{
			"results": re,
		})
	}
}

func createUser(c *gin.Context) {
	q := getQuery()
	defer q.close()

	collection := q.client.Database("test").Collection("users")
	cur, err := collection.Find(q.ctx, bson.M{})
	if err != nil {
		log.Println(err)
	} else {
		re := []bson.D{}
		for cur.Next(q.ctx) {
			var result bson.D
			err := cur.Decode(&result)
			if err != nil {
				log.Fatal(err)
			} else {
				re = append(re, result)
			}
			if err := cur.Err(); err != nil {
				log.Fatal(err)
			}
		}
		c.JSON(200, gin.H{
			"results": re,
		})
	}
}



func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}

func main() {
	r := gin.Default()
	r.Use(CORSMiddleware())
	r.GET("/user", getUser)
	r.POST("/user", createUser)
	r.Run("0.0.0.0:3002") // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}
