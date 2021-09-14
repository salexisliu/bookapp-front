import React from 'react';
import { NavLink } from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';

function Navbar() {
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

<ReactBootstrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</ReactBootstrap.Navbar>

}

export default Navbar;
