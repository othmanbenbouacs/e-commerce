import React from "react";
import "./App.css";
import { Homepage } from "./pages/home/HomePage.jsx";
import Header from "./components/header/Header";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/ShopPage.jsx";
import SignInAndSignOut from "./pages/sign-in-and-sign-up/SignInAndSignUp";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
