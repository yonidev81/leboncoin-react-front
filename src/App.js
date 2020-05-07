import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Header from "./components/Header";

import Offer from "./containers/Offer";
import Offers from "./containers/Offers";

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Switch>
          <Route path="/offer/:id">
            <Offer />
          </Route>
          <Route path="/">
            <Offers />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
