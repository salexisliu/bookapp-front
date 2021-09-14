
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Bookshelf from './Bookshelf';
import Header from './Header';
import Login from './Login';
import Home from './Home';
import BooksContainer from './BooksContainer';

function App() {
  return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
                <Home />
          </Route>

          <Route path="/bookshelf">
            <Bookshelf />
          </Route>

        <Route path="/browsebooks">
         <BooksContainer/>
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        </Switch>
      </Router>
  );
}

export default App;
