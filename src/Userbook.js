import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom';
function Userbook({userbook, deleteUserbook}) {


// this displays one book to the userbook bookshelf
  return(<>
  {/* history .push click event */}
  <Link to={`/userbook/${userbook.id}`} style={{color:"black"}}> 
   <div className="shelfbooks">
     
   <img
      src={userbook.book.bookspine_img}
      alt={userbook.book.title} />
      <p>{userbook.id}</p>

    <h5 id="shelftitles">
       
          {userbook.book.title}
      
  
    </h5>

        <button onClick={(e) => deleteUserbook(userbook.id, e)}>X</button>
    </div>
    
    </Link>
     
   
 
   </>
  )
}
export default Userbook;