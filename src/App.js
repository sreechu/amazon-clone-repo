import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import { Login } from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
function App() {
  const [, dispatch] = useStateValue();

  useEffect(() => {
    //will run only once when the app component loads since the [] is empty !!
    //once the app loads, we load this listener that looks out for auth object
    auth.onAuthStateChanged((authUser) => {
      //console.log("user is " + authUser);
      if (authUser) {
        //user logged in
        //dispatch the newly created user into the state
        dispatch({ type: "SET_USER", user: authUser });
      } else {
        //user is logged out
        //dispatch the empty user / NULL into the state
        dispatch({ type: "SET_USER", user: null });
      }
    });
  }, []);

  return (
    //THE ORDER OF THE ROUTES IS SUPER IMPORTANT!!
    //HOME PAGE OR DEFAULT AT THE END
    //update after FIrebase authentication, we keep a track of who is signed in with the help of a Listener!!
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
