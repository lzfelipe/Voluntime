import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//fonts
import GlobalFonts from './fonts/fonts';

//Pages
import Login from './pages/Login'
import Main from './pages/Main'
import Registro from './pages/Registro'
import Home from './pages/Home'
import OngPage from './pages/ongPage'
import Profile from "./pages/Profile";
import SendApplication from "./pages/SendApplication";
import Termos from "./pages/Termos";

export default class App extends Component {
  render() {
    return (
      <Router>
        <style jsx="true" global="true">
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
          <Route path="/perfil" component={Profile} />
          <Route path="/tos" component={Termos} />

          <Route path="/ong/:id" render={(props) => (
                <OngPage key={props.match.params.nome} {...props} />
              )}
            />

        <Route path="/aplicar/:id/:ong_id" exact render={(props) => (
                <SendApplication key={props.match.params.nome} {...props} />
              )}
            />

        </Switch>
      </Router>
    );
  }
}
