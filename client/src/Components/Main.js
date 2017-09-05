import React, { Component } from "react";
import {Navbar, NavItem} from 'react-materialize';

  class Main extends Component {
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
  