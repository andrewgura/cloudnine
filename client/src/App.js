import React, { Component } from 'react';
import './App.css';
import { Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Listings from "./Pages/Listings/Listings";
import ListView from "./Pages/ListView/ListView";


class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/listings/guests:guests/:start/:out" component={Listings}/>
        <Route exact path="/:name/:id" component={ListView}/>
      </div>
    );
  }
}

export default App;
