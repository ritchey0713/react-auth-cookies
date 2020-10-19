import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Dashboard from './Dashboard.js';
import Home from './Home';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <Switch>
            <Route exact path={"/"} component={ Home }/>
            <Route exact path={"/dashboard"} component={ Dashboard }/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
