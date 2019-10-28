import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import './App.css';

import Create from './pages/Create';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/create" exact component={Create}/>

        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
