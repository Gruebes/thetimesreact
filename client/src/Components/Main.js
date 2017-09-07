import React, { Component } from "react";
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
        <NavItem href='get-started.html'>Getting started</NavItem>
        <NavItem href='components.html'>Components</NavItem>
      </Navbar>
      );
    }
  }
  
  export default Main;
  