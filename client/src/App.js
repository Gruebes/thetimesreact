import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Navbar, NavItem } from 'react-materialize';
import Search from './Components/Search'
import Saved from './Components/Saved'
import Main from './Components/Main'


const App = () =>
  <Router>
    <div>
        <Navbar brand='NYT React' right>
          <NavItem><Link to="/saved">Saved</Link></NavItem>
          <NavItem><Link to="/search">Search</Link></NavItem>
        </Navbar>
        <Route exact path='/' component={Main} />        
        <Route exact path='/search' component={Search} />
        <Route exact path='/saved' component={Saved} />
    </div>
  </Router>;
  
  export default App;