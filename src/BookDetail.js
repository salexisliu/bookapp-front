import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";

import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Review from "./Review";
// from app.j
// link from userbook.js
export default function BookDetail({ userbook }) {
  const [book, setBook] = useState({ reviews: [] });

  const bookId = userbook.book_id;
  console.log("bookid", bookId);

  useEffect(() => {
    fetch(`http://localhost:9292/books/${bookId}`)
      .then((r) => r.json())
      .then(setBook);
  }, []);

  console.log(book);
  console.log("bookreviews", book.reviews);

  const bookreviews = book.reviews;
  console.log(bookreviews);

  const displayreviews = bookreviews.map((bookreview) => (
    <li>{bookreview.content}</li>
  ));

  return (
    <Container>
      <Card>
        <Col>{userbook.book.title}</Col>
        <Col>userbook id:{userbook.id}</Col>
        <Col>book id:{userbook.book_id}</Col>
        <img src={userbook.book.img_url}></img>
      </Card>
      {displayreviews}
    </Container>
  );
}
