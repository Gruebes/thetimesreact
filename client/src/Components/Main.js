// File not in use

import React, { Component } from "react";
import { Link } from 'react-router-dom';
import API from "../utils/API";
import {Navbar, NavItem} from 'react-materialize';

  class Main extends Component {

    componentDidMount() {
      API.getTest().then((res) => {
        console.log('------------------------------------');
        console.log(res);
        console.log('------------------------------------');
      })
    }

    render() {
      return (
      <Navbar brand='logo' right>
        <NavItem><Link to="/saved">Saved</Link></NavItem>
        <NavItem><Link to="/search">Search</Link></NavItem>
      </Navbar>
      );
    }
  }
  
  export default Main;
  