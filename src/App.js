import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import './App.css';

import Create from './pages/Create';
import Login from './pages/Login';
import Test from './pages/Test';
class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact component={Login}/>
          <Route path="/create" exact component={Create}/>
          <Route path="/test" exact component={Test}/>

        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
