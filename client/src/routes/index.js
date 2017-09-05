import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Search from '../Components/Search'

export default () => (
    (<BrowserRouter>
        <Route path='/' component={Search} />
    </BrowserRouter>)
        
);