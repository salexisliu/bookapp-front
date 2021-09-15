import React, { useState, useEffect } from 'react';
import Userbook from './Userbook';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Bookshelf(){

  const [userbooks, setUserBooks] = useState([])

  useEffect(() => { 
    fetch('http://localhost:9292/bookshelf?user_id=1')
      .then(res => res.json())
      .then(setUserBooks)
  }, [])

  const deleteUserbook = (id) => {

    fetch(`http://localhost:9292/bookshelf/${id}?user_id=1`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(deletedUserbook => deleteBook(deletedUserbook))
  }

  function deleteBook(deletedUserbook) {
    console.log(userbooks)
    const newbooks = userbooks.filter(userbook => userbook.id !== deletedUserbook.id)
    console.log(newbooks)
    setUserBooks(newbooks)
  }

  const displaybookshelf = userbooks.map((userbook) => 

  <Userbook key={userbook.id} 
  userbook={userbook} 
  deleteUserbook = {deleteUserbook} 
  />) 

return (
  
  <div>
    <h1>Bookshelf books</h1>
    <Container>
      <Row>
        <Col id="shelf"> 
        {displaybookshelf}
        </Col>
      </Row>
    </Container>

  
  </div>
  )
} 
export default Bookshelf;
