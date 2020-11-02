package main

import (
	"crypto/rand"
	"fmt"

	"github.com/russross/blackfriday"
)

// GenerateID Генерация ID
func GenerateID() string {
	b := make([]byte, 16)
	rand.Read(b)
	return fmt.Sprintf("%x", b)
}

// ConvertMarkdownToHTML конвертация марк дауна
func ConvertMarkdownToHTML(markdown string) string {
	return string(blackfriday.MarkdownBasic([]byte(markdown)))
}
