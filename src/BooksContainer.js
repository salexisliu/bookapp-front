import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import AllBooksCard from "./AllBooksCard";
import "./Box.css"


function BooksContainer({ books }) {
  // const [content, setContent] = useState("")

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   addNewReview({
  //     user_id: 1,
  //     content,
  //     book_id: bookid
  //   })
  // }

  function addNewBookToShelf(formData){
    console.log(formData)
    const body = JSON.stringify(formData)
    fetch("http://localhost:9292/userbooks", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body
    })
    .then(res => res.json())
      .then((newbook) => console.log(newbook))
    }

  

  // const addNewReview = (formData) => {
  //   console.log(formData)
  //   const body = JSON.stringify(formData)
  //   fetch("http://localhost:9292/reviews", {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body
  //   })
  //     .then(res => res.json())
  //     // .then((newreview) => console.log(newreview))
  //     .then((resBook) => addReview(resBook))
  // }

  console.log(books);

  return (

    <Container id="allbooks">
      <Col>
        <Row xs={2}>

          {books.map((book) => (
          
            <AllBooksCard book={book} addNewBookToShelf={addNewBookToShelf} />))}

        </Row>
      </Col>
    </Container>
  );
        
          }

export default BooksContainer;
