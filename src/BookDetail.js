import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
// from app.js
// link from userbook.js
export default function BookDetail({ userbook }) {
  console.log(userbook);
  return (
    <Container>
      <Card>
      <Col>{userbook.book.title}</Col>
      <Col>userbook id:{userbook.id}</Col>
      <Col>book id:{userbook.book_id}</Col>

      <img src={userbook.book.img_url}></img>
  </Card>
    </Container>
  );
}
