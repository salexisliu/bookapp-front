import React, { useState, useEffect } from 'react';

function Userbook({userbook}) {

  return(<>
  
    <div className="bookspines">
   <img
      src={userbook.book.bookspine_img}
      alt={userbook.book.title}
      // width="100%"
    />
    
    
    <h6 className="shelftitles">
      {userbook.book.title}
    </h6>

    </div>
 
   </>
  )
}
export default Userbook;