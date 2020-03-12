import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import './App.css';

import Landing from './pages/Landing';
import Create from './pages/Create';
import Login from './pages/Login';
import Home from './pages/Home';

import { ColorContextProvider } from './contexts/ColorContext';
import { FontContextProvider } from './contexts/FontContext';
import ThemeContext, { ThemeContextProvider } from './contexts/ThemeContext';

import sampleConfig from './sui.json';

class App extends Component {


  constructor(props) {
    super(props);
  }


  render() {
    return (
      
      <FontContextProvider>
        <ColorContextProvider>
        <ThemeContextProvider>
          {/* <ThemeContextProvider theme={sampleConfig}> */}
            <BrowserRouter>
              <Switch>
                <Route path="/" exact component={Landing}/>
                <Route path="/login" exact component={Login}/>
                <Route path="/create" exact component={Create}/>
                <Route path="/home" exact component={Home}/>
              </Switch>
            </BrowserRouter>
          </ThemeContextProvider>
        </ColorContextProvider>
      </FontContextProvider>




    );
  }
}

export default App;
