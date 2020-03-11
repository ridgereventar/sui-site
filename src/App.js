import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import './App.css';

import Landing from './pages/Landing';
import Create from './pages/Create';
import Login from './pages/Login';
import {StyleContextProvider, StyleContextConsumer} from './contexts/StyleContext';
import { ColorContextProvider } from './contexts/ColorContext';
import FontContext, { FontContextProvider } from './contexts/FontContext';


export const StyleContext = React.createContext();

class App extends Component {


  constructor(props) {
    super(props);
  }


  render() {
    return (
      <FontContextProvider>
        <ColorContextProvider>
          <StyleContextProvider>
            <BrowserRouter>
              <Switch>
                <Route path="/" exact component={Landing}/>
                <Route path="/login" exact component={Login}/>
                <Route path="/create" exact component={Create}/>
                
                {/* <StyleContextConsumer>
                  {(value) => {return <Create colors={value}></Create>}}
                </StyleContextConsumer> */}

              </Switch>
            </BrowserRouter>
          </StyleContextProvider>      
        </ColorContextProvider>
      </FontContextProvider>




    );
  }
}

export default App;
