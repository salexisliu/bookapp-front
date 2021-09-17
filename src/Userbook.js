import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'


function Userbook({userbook, deleteUserbook}) {


// this displays one book to the userbook bookshelf
  return(<>
  {/* history .push click event */}

  {/* bookshelf/userbook.id  GO TO BOOK DETAIL AND APP JS */}
  <Link to={`/books/${userbook.book_id}`} style={{color:"black"}}> 
  
   <div className="shelfbooks">
     
   <img
      src={userbook.book.bookspine_img}
      alt={userbook.book.title} />
<p></p>

    <h5 id="shelftitles">
       
          {userbook.book.title}
      
  
    </h5>

    <Button variant="danger" className="deletebtn" onClick={(e) => deleteUserbook(userbook.id, e)}>x</Button>
    </div>
    
    </Link>
     
   
 
   </>
  )
}
export default Userbook;