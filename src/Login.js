import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
//!!
// login placeholder code from here
// https://serverless-stack.com/chapters/create-a-login-page.html

export default function Login({currentUser, setCurrentUser}) {

  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })

  // function manageFormData(event) {
  //   let targetName = event.target.name;
  //   let targetValue = event.target.value
  // }

    //update formData with new form submission data

  function manageFormData(e){
    let targetName = e.target.name;
    let targetValue = e.target.value

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    let user = {
      username: formData.username,
      password: formData.password
    }
  
    setCurrentUser(user)
    console.log(user)
    
  }

  return (
    <div className="Login">
      <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="medium" >
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            type="username"
            name="username"
            value={formData.username}
            onChange={manageFormData}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={manageFormData}
          />
        </Form.Group>
        <Button block size="lg" type="submit">
        {/* <Button block size="lg" type="submit" disabled={!validateForm()}> */}
          Login
        </Button>
      </Form>
     </Container>
    </div>
  );
}