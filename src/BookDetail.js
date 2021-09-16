import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// from app.js
// link from userbook.js
export default function BookDetail({ userbook }) {
  console.log(userbook);
  return (
    <Container>
      <Card style={{ width: "18rem" }}>
      <Col>{userbook.book.title}</Col>
      <Col>Author: {userbook.book.author}</Col>
      <Col>Page Count: {userbook.book.pages}</Col>

      {/* <img src={userbook.book.img_url}></img> */}
      <img src={'https://media.discordapp.net/attachments/887887430475186176/887887513539215480/image0.png?width=1285&height=885'}></img>
      <Button variant="primary">Click to see more info</Button>
  </Card>
    </Container>
  );
}
