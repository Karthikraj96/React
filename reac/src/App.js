import React from "react";
import Header from "./Header/Header";
import Counter from "./Counter/Counter.js";
import Counter2 from "./Hooks/Counter/Counter.js";
import Todo from "./Todo/index.js";
import Todo2 from "./Hooks/Todo/index.js";
import Todo3 from "./ReduxTodo/index.js";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
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
                <li className="nav-item active">
                  <Link className="nav-link" to="/todo3">
                    Todo Redux
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to="/todo2">
                    Todo 2 Hooks
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to="/con2">
                    Counter Hooks
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
            <Route path="/todo2">
              <Todo2 />
            </Route>
            <Route path="/con2">
              <Counter2 />
            </Route>
            <Route path="/todo3">
              <Todo3 />
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
    </div>
  );
}

export default App;

