import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom';
function Userbook({userbook, deleteUserbook}) {



  return(<>
 <Link to={`/book/${userbook.id}`} style={{color:"black"}}>
   <div className="shelfbooks">
     
   <img
      src={userbook.book.bookspine_img}
      alt={userbook.book.title} />
      <p>{userbook.id}</p>

    <h5 id="shelftitles">
       
          {userbook.book.title}
      
        
       
      <button onClick={() => deleteUserbook(userbook.id)}>X</button>
    </h5>

    </div>
    
    </Link>
     
   
 
   </>
  )
}
export default Userbook;