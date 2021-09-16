import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { CardColumns } from "react-bootstrap";
import "./Box.css"

function BooksContainer({ allbooks }) {
  console.log(allbooks);

  return (
    <Container id="allbooks">
      {allbooks.map((book) => (
        <Card className="card-style" style={{ width: "18rem" }} className='box'>
          <Card.Img variant="top" src={book.img_url} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>Brief book description</Card.Text>
            <Button variant="primary">Add book</Button>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
        

}
export default BooksContainer;
