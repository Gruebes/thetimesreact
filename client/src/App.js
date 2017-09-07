import React, { Component } from "react";
import Routes from './routes'
import Main from './Components/Main'

class App extends Component {
    render() {
      return (
        <div>
        <Main/>
        <Routes />
      </div>
      );
    }
  }
  
  export default App;