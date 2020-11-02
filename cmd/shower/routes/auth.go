package routes

import (
	"fmt"
	"net/http"

	"github.com/mshegolev/bm/cmd/stayer/session"

	"github.com/martini-contrib/render"
)

//GetLoginHandler получить логин
func GetLoginHandler(rnd render.Render) {
	rnd.HTML(200, "login", nil)
}

//PostLoginHandler отправить логин
func PostLoginHandler(rnd render.Render, r *http.Request, s *session.Session) {
	username := r.FormValue("username")
	password := r.FormValue("password")

	fmt.Println(username)
	fmt.Println(password)

	s.Username = username
	s.IsAuthorized = true

	rnd.Redirect("/")
}

//LogoutHandler выйти
func LogoutHandler(rnd render.Render, r *http.Request, s *session.Session) {
	s.Username = ""
	s.IsAuthorized = false

	rnd.Redirect("/")
}
