
import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "./Box.css"
import { Link } from 'react-router-dom';
import { MdAddToPhotos } from 'react-icons/md'


function AllBooksCard({ book, addNewBookToShelf}) {
  console.log("allbook", book)

  const handleAddClick = (e) => {
    e.preventDefault()
    addNewBookToShelf({
      user_id: 1,
      read: false,
      book_id: book.id
      
      
    })
  }

  return (

    <Card id="allcard" style={{ width: "18rem", padding: "5px"}} >
      <Card.Header></Card.Header>
      <Link to={`/books/${book.id}`} style={{ color: "black" }}>  <Card.Img variant="top" src={book.img_url} />    </Link>
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>{book.author}</Card.Text>
        <Button variant="success" size="sm" onClick={handleAddClick}> Add to Shelf <MdAddToPhotos/></Button>
      </Card.Body>
    </Card>
  )
}
export default AllBooksCard;
