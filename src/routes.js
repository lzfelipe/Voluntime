import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//fonts
import GlobalFonts from './fonts/fonts';

//Pages
import Login from './pages/Login'
import Main from './pages/Main'
import Registro from './pages/Registro'
import Home from './pages/Home'

export default class App extends Component {
  render() {
    return (
      <Router>
        <style jsx global>
        {`body { margin: 0px; padding: 0px; overflow-x: hidden; max-width: 100vw; -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
            box-sizing: border-box;}`}
      </style>
        <GlobalFonts />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/login"  component={Login} />
          <Route path="/registro" component={Registro} />
          <Route path="/home" component={Home} />
        </Switch>
      </Router>
    );
  }
}
