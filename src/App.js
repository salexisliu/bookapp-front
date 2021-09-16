import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Bookshelf from "./Bookshelf";
import Header from "./Header";
import Login from "./Login";
import Home from "./Home";
import BooksContainer from "./BooksContainer";
import BookDetail from "./BookDetail";
import React, { useState, useEffect } from "react";

function App() {
  const [userbooks, setUserBooks] = useState([]);
  const [books, setBooks] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  // ${currentuser.id}
  useEffect(() => {
    fetch("http://localhost:9292/userbooks?user_id=1")
      .then((res) => res.json())
      .then(setUserBooks)
    fetch("http://localhost:9292/books")
      .then((res) => res.json())
      .then(setBooks)
  }, []);

  
  function addReview(resBook){
 
    const index = books.findIndex(book => book.id  === resBook.id)
    const newBooks = [...books.slice(0,index),resBook, ...books.slice(index+1)]
    setBooks(newBooks)

  }

  return (
    <Router>
      <Header />
      <Switch>
        {/* <Route exact path="/">
          <Home />
        </Route> */}

        <Route exact path="/">
          <Bookshelf userbooks={userbooks} setUserBooks={setUserBooks} />
        </Route>

        <Route path="/browsebooks">
          <BooksContainer books = {books} />
        </Route>

        <Route path="/login">
          <Login currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        </Route>

        <Route
          exact
          path="/books/:id"
          render={({ match }) => (
            //opens the book in user bookshelf
            <BookDetail addReview = {addReview}
              openbook={books.find(
                (book) => book.id === parseInt(match.params.id) 
              )} 
            />
            
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
