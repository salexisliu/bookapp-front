import React, { useState, useEffect } from 'react';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
function BooksContainer({allbooks}) {
console.log(allbooks)

  return (
    <Container fluid id="allbooks">
   
      <Col xs="4">
      
      {allbooks.map((book) => 

<Card style={{ width: '18rem' }}>
<Card.Img variant="top" src="holder.js/100px180" />
<Card.Body>
  <Card.Title>Book Title</Card.Title>
  <Card.Text>
    Brief book description
  </Card.Text>
  <Button variant="primary">Go somewhere</Button>
</Card.Body>
</Card>
      
      )
}
</Col>

    </Container>
  )
}
export default BooksContainer;
