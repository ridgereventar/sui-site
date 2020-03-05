import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import './App.css';

import Landing from './pages/Landing';
import Create from './pages/Create';
import Login from './pages/Login';


export const StyleContext = React.createContext();

class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      style: {
        button: {
          primary: 'red'
        }
      }
    }
  }

  setPrimary = (hex) => {
    this.setState(state => {
      return {
        ...state,
        style: {
          ...state.style,
          button: {
            ...state.style.button,
            primary: hex
          }
        }

      }
    })
  }

  render() {
    return (
      <StyleContext.Provider value={{
          styles: this.state.style,
          handlers: {
            setPrimary: this.setPrimary
          }
        }}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Landing}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/create" exact component={Create}/>
          </Switch>
        </BrowserRouter>
      </StyleContext.Provider>
    );
  }
}

export default App;
