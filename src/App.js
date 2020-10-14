import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";

function App() {
  return (
    //BEM
    <Router>
      <div className="App">
        <Header />
        <Home />
      </div>
    </Router>
  );
}

/*<Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>*/
export default App;
