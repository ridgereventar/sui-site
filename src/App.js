import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './styles/App.css';

import Landing from './pages/Landing';
import Create from './pages/Create';
import Home from './pages/Home';

import { UserContextProvider } from './contexts/UserContext';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>      
        <UserContextProvider>
            <Switch>
                <Route path="/" exact component={Landing}/>
                <Route path="/login" exact component={Landing}/>
                <Route path="/signup" exact component={Landing}/>
                <Route path="/create" exact component={Create}/>
                <Route path="/home" exact component={Home}/>
            </Switch>
        </UserContextProvider>
      </BrowserRouter>
    );
  }
}

export default App;
