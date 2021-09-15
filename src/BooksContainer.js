import React, { useState, useEffect } from 'react';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
function BooksContainer({allbooks}) {
console.log(allbooks)

  return (
    <Container style={{display: 'flex', flexDirection: 'row'}} id="allbooks">
  
      
      {allbooks.map((book) => 

        <Card style={{ width: '15rem' }} style={{ flex: 1 }}>
          <Card.Img variant="top" src={book.img_url} />
          <Card.Title>{book.title}</Card.Title>
          <Card.Body>sumary goes here.</Card.Body>
      </Card>
      
      )
}
    </Container>
  )
}
export default BooksContainer;
