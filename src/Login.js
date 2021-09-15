import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Component } from 'react'
//!!
// login placeholder code from here
// https://serverless-stack.com/chapters/create-a-login-page.html

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // store as object in state 


  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Login</h3>

      <div className="form-group">
        <label>Username</label>
        <input type="username" className="form-control" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>

      <div className="form-group">
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" id="customCheck1" />
          <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
        </div>
      </div>

      <button type="submit" className="btn btn-primary btn-block" disabled={!validateForm()}>Submit</button>
      <p className="forgot-password text-right">
        Forgot <a href="#">password?</a>
      </p>
    </form>
  );
}

{/* <Container>
<Form onSubmit={handleSubmit}>
  <Form.Group size="medium" controlId="email">
    <Form.Label>Username</Form.Label>
    <Form.Control
      autoFocus
      type="username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
    />
  </Form.Group>
  <Form.Group size="lg" controlId="password">
    <Form.Label>Password</Form.Label>
    <Form.Control
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
  </Form.Group>
  <Button block size="lg" type="submit" disabled={!validateForm()}>
    Login
  </Button>
</Form>
</Container>
</div> */}