import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

export default function ReviewForm({addNewReview, bookid}) {
  const [content, setContent] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    addNewReview({
      user_id: 1,
      content,
      book_id: bookid
    })
    
    setContent("")

  }

return (
  <>
  <br></br>
  <Form onSubmit={handleSubmit}>
    <Form.Label htmlFor="review"><b>Leave a review!</b></Form.Label><br/>
    <InputGroup size="sm">
        <Form.Control style={{ backgroundColor: "#fff1c6", color: "#5b4407" }}
        as="textarea"
          placeholder= "Write a review here..."
          id="content"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
    </InputGroup>
    <br></br>
      <Button variant="success" size="sm" id="button-addon1" type="submit">Submit</Button>
  </Form>
  </>
)
  
}