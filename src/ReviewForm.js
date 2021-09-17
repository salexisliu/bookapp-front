import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

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
  <Form onSubmit={handleSubmit}>
    <Form.Label htmlFor="review">Write a review</Form.Label><br/>
    <InputGroup size="sm">
        <input
          type="text"
          id="content"
          name="content"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
    </InputGroup>
    <Button size="sm" id="button-addon1" type="submit">Submit</Button>
  </Form>
)
  
}