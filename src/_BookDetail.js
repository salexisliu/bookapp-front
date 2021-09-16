import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Review from "./Review";
import ReviewForm from "./ReviewForm";
// from app.j
import Button from "react-bootstrap/Button";
// from app.js
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

  // add New Review from form

  const addNewReview = (formData) => {
    const body = JSON.stringify(formData)
    fetch("http://localhost:9292/reviews/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body
    })
      .then(res => res.json())
      .then(thing => {
        // setThings(things.concat(thing))
      })
  }

  return (
    <Container>
      <Card style={{ width: "18rem" }}>
      <Col>{userbook.book.title}</Col>
      <Col>Author: {userbook.book.author}</Col>
      <Col>Page Count: {userbook.book.pages}</Col>

      <img src={userbook.book.img_url}></img>
      {/* <img src={'https://media.discordapp.net/attachments/887887430475186176/887887513539215480/image0.png?width=1285&height=885'}></img> */}
      <Button variant="primary">Click to see more info</Button>
  </Card>
      {displayreviews}
      <ReviewForm />
    </Container>
  );
}
