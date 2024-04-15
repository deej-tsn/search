package controllers

import (
	"net/http"
	"strconv"

	"github.com/labstack/echo/v4"
)

type (
	postRes struct {
		Title     string `json:"title"`
		ImageURL  string `json:"imageURL"`
		Body      string `json:"body"`
		Author    string `json:"author"`
		CreatedOn string `json:"createdOn"`
	}

	postReq struct {
		Title    string `json:"title"`
		ImageURL string `json:"imageURL"`
		Body     string `json:"body"`
		Author   string `json:"author"`
	}
)

// Get the posts made by a specific user

func (h *BaseHandler) GetPostsUser(c echo.Context) error {
	username := c.Param("id")
	sqlStatement := "SELECT title, imageURL, body, created_on FROM POSTS WHERE author = ? "
	posts := []postRes{}
	rows, err := h.db.Query(sqlStatement, username)
	if err != nil {
		return err
	}
	defer rows.Close()
	for rows.Next() {
		singlePost := new(postRes)
		err = rows.Scan(&singlePost.Title, &singlePost.ImageURL, &singlePost.Body, &singlePost.CreatedOn)
		if err != nil {
			// handle this error
			return err
		}
		posts = append(posts, *singlePost)

	}
	// get any error encountered during iteration
	err = rows.Err()
	if err != nil {
		return err
	}
	return c.JSON(http.StatusOK, posts)
}

func (h *BaseHandler) CreatePost(c echo.Context) error {
	sqlStatement := "INSERT INTO POSTS (title, imageURL, body, author) VALUES (?, ?, ?, ?)"
	u := new(postReq)
	if err := c.Bind(u); err != nil {
		return err
	}
	result, err := h.db.Exec(sqlStatement, u.Title, "test", u.Body, u.Author)
	if err != nil {
		return err
	}
	id, err := result.LastInsertId()
	if err != nil {
		return err

	}
	id_string := strconv.FormatInt(id, 10)
	return c.JSON(http.StatusCreated, id_string)
}

func (h *BaseHandler) GetPosts(c echo.Context) error {
	sqlStatement := "SELECT title, imageURL, body, author, created_on FROM POSTS"
	posts := []postRes{}
	rows, err := h.db.Query(sqlStatement)
	if err != nil {
		return err
	}
	defer rows.Close()
	for rows.Next() {
		singlePost := new(postRes)
		err = rows.Scan(&singlePost.Title, &singlePost.ImageURL, &singlePost.Body, &singlePost.Author, &singlePost.CreatedOn)
		if err != nil {
			// handle this error
			return err
		}
		posts = append(posts, *singlePost)

	}
	// get any error encountered during iteration
	err = rows.Err()
	if err != nil {
		return err
	}
	return c.JSON(http.StatusOK, posts)
}
