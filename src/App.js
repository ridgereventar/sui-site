import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import './App.css';

import Landing from './pages/Landing';
import Create from './pages/Create';
import Login from './pages/Login';
import Responsive from './pages/Responsive';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Landing}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/create" exact component={Create}/>
          <Route path="/responsive" exact component={Responsive}/>

        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
