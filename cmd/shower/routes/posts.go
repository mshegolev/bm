package routes

import (
	"net/http"

	"github.com/mshegolev/bm/cmd/stayer/db/documents"
	"github.com/mshegolev/bm/cmd/stayer/models"
	"github.com/mshegolev/bm/cmd/stayer/session"
	"github.com/mshegolev/bm/cmd/stayer/utils"
	"labix.org/v2/mgo"

	"github.com/go-martini/martini"
	"github.com/martini-contrib/render"
)

//WriteHandler WriteHandler
func WriteHandler(rnd render.Render, s *session.Session) {
	if !s.IsAuthorized {
		rnd.Redirect("/")
	}
	model := models.EditPostModel{}
	model.IsAuthorized = s.IsAuthorized
	model.Post = models.Post{}
	rnd.HTML(200, "write", model)
}

//EditHandler EditHandler
func EditHandler(s *session.Session, rnd render.Render, r *http.Request, params martini.Params, db *mgo.Database) {
	if !s.IsAuthorized {
		rnd.Redirect("/")
	}
	postsCollection := db.C("posts")

	id := params["id"]

	postDocument := documents.PostDocument{}
	err := postsCollection.FindId(id).One(&postDocument)
	if err != nil {
		rnd.Redirect("/")
		return
	}
	post := models.Post{postDocument.ID, postDocument.Title, postDocument.ContentHTML, postDocument.ContentMarkdown}

	model := models.EditPostModel{}
	model.IsAuthorized = s.IsAuthorized
	model.Post = post
	rnd.HTML(200, "write", model)
}

//ViewHandler ViewHandler
func ViewHandler(s *session.Session, rnd render.Render, r *http.Request, params martini.Params, db *mgo.Database) {
	postsCollection := db.C("posts")

	id := params["id"]

	postDocument := documents.PostDocument{}
	err := postsCollection.FindId(id).One(&postDocument)
	if err != nil {
		rnd.Redirect("/")
		return
	}
	post := models.Post{postDocument.ID, postDocument.Title, postDocument.ContentHTML, postDocument.ContentMarkdown}

	model := models.ViewPostModel{}
	model.IsAuthorized = s.IsAuthorized
	model.Post = post
	rnd.HTML(200, "view", model)
}

//SavePostHandler SavePostHandler
func SavePostHandler(s *session.Session, rnd render.Render, r *http.Request, db *mgo.Database) {
	if !s.IsAuthorized {
		rnd.Redirect("/")
	}
	ID := r.FormValue("id")
	title := r.FormValue("title")
	contentMarkdown := r.FormValue("content")
	contentHTML := utils.ConvertMarkdownToHTML(contentMarkdown)

	postDocument := documents.PostDocument{ID, title, contentHTML, contentMarkdown}

	postsCollection := db.C("posts")
	if ID != "" {
		postsCollection.UpdateId(ID, postDocument)
	} else {
		ID = utils.GenerateID()
		postDocument.ID = ID
		postsCollection.Insert(postDocument)
	}

	rnd.Redirect("/")
}

//DeleteHandler DeleteHandler
func DeleteHandler(s *session.Session, rnd render.Render, r *http.Request, params martini.Params, db *mgo.Database) {
	if !s.IsAuthorized {
		rnd.Redirect("/")
	}
	id := params["id"]
	if id == "" {
		rnd.Redirect("/")
		return
	}

	postsCollection := db.C("posts")
	postsCollection.RemoveId(id)

	rnd.Redirect("/")
}

//GetHTMLsHandler GetHtmlHandler
func GetHTMLHandler(rnd render.Render, r *http.Request) {
	md := r.FormValue("md")
	html := utils.ConvertMarkdownToHTML(md)

	rnd.JSON(200, map[string]interface{}{"html": html})
}
