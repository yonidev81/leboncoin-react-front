import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Offer from "./containers/Offer";
import Offers from "./containers/Offers";
import SignUp from "./containers/SignUp";
import LogIn from "./containers/LogIn";
import Cookies from "js-cookie";
import Publish from "./containers/Publish";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlusSquare,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
library.add(faPlusSquare, faSearch, faUser);
/* import CheckoutForm from "./components/CheckoutForm";
 */
function App() {
  const tokenFromCookie = Cookies.get("userToken");
  const [user, setUser] = useState(tokenFromCookie || null);
  /* console.log(user); */

  return (
    <Router>
      <Header user={user} setUser={setUser} />
      <Switch>
        <Route path="/offer/:id">
          <Offer />
        </Route>
        <Route path="/log_in">
          <LogIn setUser={setUser} />
        </Route>
        <Route path="/sign_up">
          <SignUp setUser={setUser} />
        </Route>
        <Route path="/publish">
          <Publish />
        </Route>
        {/*  <Route path="/payment">
          <Payment stripe={stripePromise} />
          <CheckoutForm />
        </Route> */}
        <Route path="/">
          <Offers />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
