package documents

//PostDocument структура поста
type PostDocument struct {
	ID              string `bson:"_id,omitempty"`
	Title           string
	ContentHTML     string
	ContentMarkdown string
}
