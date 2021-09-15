import React, { useState, useEffect } from 'react';
import Userbook from './Userbook';
import Nextbutton from './Nextbutton';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Bookshelf(){

  const [userbooks, setUserBooks] = useState([])
  const [start, setStart] = useState(0);

  useEffect(() => { 
    fetch('http://localhost:9292/userbooks?user_id=1')
      .then(res => res.json())
      .then(setUserBooks)
  }, [])

  const tenbooks = userbooks.slice(start, start+15)

  function forwardBooks() {
    if (start >= userbooks.length - 10) {
      setStart(0)
    } else { (setStart((start) => start + 10)) }

  }

  const deleteUserbook = (id) => {

    fetch(`http://localhost:9292/userbooks/${id}?user_id=1`, {
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

  const displaybookshelf = tenbooks.map((userbook) => 

  <Userbook key={userbook.id} 
  userbook={userbook} 
  deleteUserbook = {deleteUserbook} 
  />) 

return (
  
  <div>
  
    <Container>  
     <Col> <h1>Bookshelf</h1></Col>
      <Row>
        <div id="shelf"> 
        {displaybookshelf}
        
        </div>
     
      </Row>
    
      <Row>
        <Col></Col>
        <Col></Col>
      </Row>
      <Row>
        <Col> <Nextbutton moreBooks={forwardBooks} /></Col>
        <Col xs={3}></Col>
        <Col xs={6}></Col>
        <Col><Nextbutton moreBooks={forwardBooks} /></Col>
    
      </Row>
    </Container>

  
  </div>
  )
} 
export default Bookshelf;
