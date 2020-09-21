import React from 'react';
import Header from "./Header/Header"
import Counter from "./Counter/Counter.js"
import Todo from "./Todo/index.js"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
 

function App() { 
  return (
    <>
      <Header />
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link className="nav-link" to="/todo">
                    Todo
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/counter">
                    Counter
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <Switch>
            <Route path="/todo">
              <Todo />
            </Route>

            <Route path="/counter">
              <Counter />
            </Route>

            <Route path="/">
              <Todo />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;

