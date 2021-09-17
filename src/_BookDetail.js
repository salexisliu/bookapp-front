import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import ListGroup from 'react-bootstrap/ListGroup'
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
     <ListGroup>
    
      <ListGroup.Item>{userbook.book.title}</ListGroup.Item>
      <ListGroup.Item>Author: {userbook.book.author}</ListGroup.Item>
      <ListGroup.Item>Page Count: {userbook.book.pages}</ListGroup.Item>
        </ListGroup>
      <img src={userbook.book.img_url}></img>
      
      <Button variant="success">Click to see more info</Button>

      {displayreviews}
      <ReviewForm />
    </Container>
  );
}
