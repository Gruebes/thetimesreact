import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Search from '../Components/Search'
import Saved from '../Components/Saved'

export default () => (
    (<BrowserRouter>
        <div>
            <Route exact path='/search' component={Search} />
            <Route exact path='/saved' component={Saved} />
        </div>
    </BrowserRouter>)
        
);