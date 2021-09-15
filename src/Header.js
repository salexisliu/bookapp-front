import React from 'react';
import { NavLink } from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'


function Header() {
  // return (
  //   <div className="bg-blue-100">
  //     <nav className="w-4/5 mx-auto">
  //       <NavLink className="" to="/">Home</NavLink>
  //       <NavLink className="" to="/bookshelf">Bookshelf</NavLink>
  //       <NavLink className="" to="/browsebooks">Browse All Books</NavLink>
  //       <NavLink className="" to="/login">Login</NavLink>
  //     </nav>
  //   </div>
  // );
return (
  <>
    <Navbar bg="warning" variant="dark">
      <Container>
        <Navbar.Brand href="/">BookNook</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/bookshelf">Bookshelf</Nav.Link>
          <Nav.Link href="/browsebooks">All books</Nav.Link>
          <Nav.Link href="/login">Log in</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    <br />
  </>
)
}

export default Header;
