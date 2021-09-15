import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function BookDetail({ userbook }) {
  console.log(userbook);
  return (
    <Container>
      <Col>{userbook.book.title}</Col>
      <Col>{userbook.id}</Col>
      {userbook.user_id}
    </Container>
  );
}
