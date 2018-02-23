import React, { Component } from 'react';

import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";

import Header from './Components/Header';
import Footer from './Components/Footer';

import Home from './Pages/Home';
import Works from './Pages/Works';

class App extends Component {
  render() {
    return (
      <Router>
        <div class="App">
          <Header></Header>
         
          <Route exact path="/" component={Home}></Route>
          <Route path="/works" component={Works}></Route>
          
          <Footer></Footer>
        </div>
      </Router>
    );
  }
}

export default App;
