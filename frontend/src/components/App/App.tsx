import { Items } from "components/Items/Items";
import { Message } from "components/Message/Message";
import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

const App: FunctionComponent = () => {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/items">Items</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/">
          <Message />
        </Route>
        <Route path="/items">
          <Items />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
