import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
function Userbook({userbook, deleteUserbook}) {



  return(<>

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
   
     
   
 
   </>
  )
}
export default Userbook;