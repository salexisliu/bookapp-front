import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { CardColumns } from "react-bootstrap";
import "./Box.css"
import { Link } from 'react-router-dom';

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


  
  console.log(books);

  return (
    <Container id="allbooks">
            <Col><Row xs={2}>

      {books.map((book) => (

  
     
        <Card className="card-style" style={{ width: "18rem" }} className='box'>
          <Link to={`/books/${book.id}`} style={{ color: "black" }}>  <Card.Img variant="top" src={book.img_url} />    </Link>
         <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>Brief book description</Card.Text>
            <Button variant="primary" size="sm">Add to shelf</Button>
     
    
          </Card.Body>  
        </Card>
      
  
      ))}
  
      </Row>    </Col>
    </Container>
  );
        

}
export default BooksContainer;
