package sqldb

import (
	"database/sql"
	"fmt"
	"os"

	"github.com/go-sql-driver/mysql"

	"github.com/joho/godotenv"
)

func ConnectToDB() *sql.DB {

	if err := godotenv.Load(); err != nil {
		fmt.Println("No .env file found")
	}

	var (
		host, _        = os.LookupEnv("HOST")
		port_string, _ = os.LookupEnv("PORT")
		admin, _       = os.LookupEnv("ADMIN")
		password, _    = os.LookupEnv("PASSWORD")
		dbname, _      = os.LookupEnv("DBNAME")
	)

	cfg := mysql.Config{
		User:   admin,
		Passwd: password,
		Net:    "tcp",
		Addr:   fmt.Sprintf("%s:%s", host, port_string),
		DBName: dbname,
	}
	db, err := sql.Open("mysql", cfg.FormatDSN())
	if err != nil {
		panic(err)
	}
	err = db.Ping()
	if err != nil {
		panic(err)
	}
	return db
}
