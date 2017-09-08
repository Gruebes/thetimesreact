// File not in use

import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {Button} from 'react-materialize';
import "./Main.css";

  class Main extends Component {

    render() {
      return (
    <div>
      <div className="jumbotron">
      </div>
      <div className="container">
        <div className="button-group" >
          <Button className="main-buttons" waves='light'><Link to="/saved">Saved</Link></Button>
          <Button className="main-buttons" waves='light'><Link to="/search">Search</Link></Button>    
        </div>
      </div>
    </div>
      
      );
    }
  }
  
  export default Main;
  