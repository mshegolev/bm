package models

// Post пост
type Post struct {
	ID              string
	Title           string
	ContentHTML     string
	ContentMarkdown string
}

// NewPost ноый пост
func NewPost(ID, title, contentHTML, contentMarkdown string) *Post {
	return &Post{ID, title, contentHTML, contentMarkdown}
}
