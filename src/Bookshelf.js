import React, { useState, useEffect } from "react";
import Userbook from "./Userbook";
import Nextbutton from "./Nextbutton";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Bookshelf({ userbooks, setUserBooks }) {
  const [start, setStart] = useState(0);

  console.log(userbooks);

  const deleteUserbook = (id, e) => {
    e.stopPropagation();
    e.preventDefault();
    fetch(`http://localhost:9292/userbooks/${id}?user_id=1`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((deletedUserbook) => setUserBooks(userbooks.filter(userbook => userbook.id !== deletedUserbook.id)))
  }

  // function deleteBook(deletedUserbook) {

  //   const newbooks = userbooks.filter(
  //     (userbook) => userbook.id !== deletedUserbook.id
  //   );
  
  //   setUserBooks(newbooks);
  // }

  const tenbooks = userbooks.slice(start, start + 15);

  function forwardBooks() {
    if (start >= userbooks.length - 15) {
      setStart(0);
    } else {
      setStart((start) => start + 15);
    }
  }

  const displaybookshelf = tenbooks.map((userbook) => (
    <Userbook
      key={userbook.id}
      userbook={userbook}
      deleteUserbook={deleteUserbook}
    />
  ));

  return (
    <div>
      <Container id="bookshelfdiv">
        <Col>
          {" "}
          <h1>Bookshelf</h1>
        </Col>
        <Row>
          {/*  This is the bookshelf of userbooks */}
          <div id="shelf">{displaybookshelf}</div>
        </Row>

        <Row>
          <Col></Col>
          <Col></Col>
        </Row>
        <Row>
          <Col>
            {" "}
            <Nextbutton moreBooks={forwardBooks} />
          </Col>
          <Col xs={3}></Col>
          <Col xs={6}></Col>
          <Col>
            <Nextbutton moreBooks={forwardBooks} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Bookshelf;
