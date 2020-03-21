import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import './styles/App.css';

import Landing from './pages/Landing';
import Create from './pages/Create';
import Home from './pages/Home';

import { ColorContextProvider } from './contexts/ColorContext';
import { FontContextProvider } from './contexts/FontContext';
import ThemeContext, { ThemeContextProvider } from './contexts/ThemeContext';

import sampleConfig from './helpers/sui.json';
import { UserContextProvider } from './contexts/UserContext';

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
            <UserContextProvider>
              <BrowserRouter>
                <Switch>
                  <Route path="/" exact component={Landing}/>
                  <Route path="/landing" component={Landing}/>
                  <Route path="/create" exact component={Create}/>
                  <Route path="/home" exact component={Home}/>
                </Switch>
              </BrowserRouter>
            </UserContextProvider>
          </ThemeContextProvider>
        </ColorContextProvider>
      </FontContextProvider>

    );
  }
}

export default App;
