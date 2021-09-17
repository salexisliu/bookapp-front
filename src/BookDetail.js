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
export default function BookDetail({ openbook, addReview }) {


  // const [reviews, setReviews] = useState([])
  console.log("bookdetail", openbook)

  const bookreviews = openbook && openbook.reviews;
  console.log(bookreviews);

  // setReviews(bookreviews);


  // this is rendering reviews on page:
  const displayreviews = openbook && bookreviews.map((bookreview) => (
    <li>{bookreview.content}</li>
  ));

  //adds a review to open book

  // add New Review from form
  

  const addNewReview = (formData) => {
    console.log(formData)
    const body = JSON.stringify(formData)
    fetch("http://localhost:9292/reviews", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body
    })
      .then(res => res.json())
      // .then((newreview) => console.log(newreview))
      .then((resBook) => addReview(resBook))
    }

    //resbook: {id: 3, title: 'The Midnight Library', author: 'Matt Haig', img_url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1536852275l/41063454.jpg', bookspine_img: 'https://i.ibb.co/41QkH4c/bookorange.png', …}


  return ( //short circuit operator
    //if open book, show else: loading..
    <Container> 
     {openbook && <Card style={{ width: "18rem" }}>
        <Col>{openbook.title}</Col>
        <Col>Author: {openbook.author}</Col>
        <Col>Page Count: {openbook.pages}</Col>

        <img src={openbook.img_url}></img>
        {/* <img src={'https://media.discordapp.net/attachments/887887430475186176/887887513539215480/image0.png?width=1285&height=885'}></img> */}
        <Button variant="primary">Click to see more info</Button>
      </Card>}
      {displayreviews}
      {openbook && <ReviewForm addNewReview={addNewReview} bookid={openbook.id} />}
    </Container>
  );
}
