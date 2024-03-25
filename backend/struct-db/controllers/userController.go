package controllers

import (
	"database/sql"
	"net/http"
	"strconv"

	"github.com/deej-tsn/searching/struct-db/encryption"
	"github.com/labstack/echo/v4"
)

type (
	new_user_req struct {
		//ID     int    `json:"id"`
		Username   string `json:"username"`
		FirstName  string `json:"fname"`
		SecondName string `json:"sname"`
		Email      string `json:"email"`
		Password   string `json:"password"`
	}

	sign_in_req struct {
		Email    string `json:"email"`
		Password string `json:"password"`
	}

	db_user_res struct {
		//ID int `json:id`
		ID       string `json:"id"`
		Username string `json:"username"`
		Passhash string `json:"passhash"`
	}

	jwt_Json struct {
		JWT   string `json:"jwt"`
		Error string `json:"error"`
	}

	jwt_auth struct {
		JWT string `json:"jwt"`
	}
)

func NewUserHandler(db *sql.DB) *BaseHandler {
	return &BaseHandler{
		db: db,
	}
}

func (h *BaseHandler) AuthenticateJwt(c echo.Context) error {
	token := new(jwt_auth)
	if err := c.Bind(token); err != nil {
		return err
	}
	claims, err := encryption.AuthJWT(token.JWT)
	if err != nil {
		return err
	}
	user := map[string]string{"username": claims.Username, "id": claims.ID}
	return c.JSON(http.StatusAccepted, user)
}

func (h *BaseHandler) CreateUser(c echo.Context) error {
	sqlStatement := "INSERT INTO USERS (username, first_name, second_name, email, passhash ) VALUES (?, ?, ?, ?, ?)"
	u := new(new_user_req)
	if err := c.Bind(u); err != nil {
		return err
	}
	passhash := encryption.Encrypt(u.Password)
	result, err := h.db.Exec(sqlStatement, u.Username, u.FirstName, u.SecondName, u.Email, passhash)
	if err != nil {
		return err
	}
	id, err := result.LastInsertId()
	if err != nil {
		return err

	}
	id_string := strconv.FormatInt(id, 10)
	jwtToken, err := encryption.GenJWT(u.Username, id_string)
	if err != nil {
		return err
	}
	res := &jwt_Json{jwtToken, ""}
	return c.JSON(http.StatusCreated, res)
}

// Get user for log in

func (h *BaseHandler) GetUserLogin(c echo.Context) error {
	signIn := new(sign_in_req)
	res := new(db_user_res)
	if err := c.Bind(signIn); err != nil {
		return err
	}
	sqlStatement := "SELECT user_id, username, passhash from USERS WHERE email = ?"

	err := h.db.QueryRow(sqlStatement, signIn.Email).Scan(&res.ID, &res.Username, &res.Passhash)
	if err != nil {
		return err
	}
	if encryption.Compare(res.Passhash, signIn.Password) {
		jwtToken, err := encryption.GenJWT(res.Username, res.ID)
		if err != nil {
			return err
		}
		res := &jwt_Json{jwtToken, ""}
		return c.JSON(http.StatusOK, res)
	} else {
		m := &jwt_Json{"", "password incorrect"}
		return c.JSON(http.StatusUnauthorized, m)
	}
}
