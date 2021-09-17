import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import ListGroup from 'react-bootstrap/ListGroup'
import Image from 'react-bootstrap/Image'
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
  const displayreviews = openbook && bookreviews.map((bookreview) => (<>
    <ListGroup.Item id="reviews"><b>{bookreview.user.username}</b>: {bookreview.content}</ListGroup.Item>

    </>
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
    <div className="openbook">
      <Container>
   <Row></Row>
      <Row> 
    
     {openbook && 
          <Col>

       <ListGroup className="bookinfo">
              <ListGroup.Item >{openbook.title}</ListGroup.Item>
              <ListGroup.Item>Author: {openbook.author}</ListGroup.Item>
              <ListGroup.Item>Page Count: {openbook.pages}</ListGroup.Item>
              </ListGroup>
        <Image className="openbookImage" src={openbook.img_url} rounded></Image>
          </Col>
    
      }
     
      
    </Row>
    <Row></Row>
      <Row id="reviewbox">
        <div className="review"> {displayreviews}

          {openbook && <ReviewForm addNewReview={addNewReview} bookid={openbook.id} />}
        </div>

      </Row>
     </Container>
    </div>
  );
}
