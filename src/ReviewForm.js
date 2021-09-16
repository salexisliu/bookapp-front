import React, { useState, useEffect } from "react";


export default function ReviewForm({addNewReview, bookid}) {
  const [content, setContent] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    addNewReview({
      user_id: 1,
      content,
      book_id: bookid
    })

  }

return (
  <form onSubmit={handleSubmit}>
     <label htmlFor="review">Write a review</label><br/>
        <input
          type="text"
          id="content"
          name="content"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
    <button type="submit">Submit</button>
  </form>
)
  
}