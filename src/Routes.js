import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from "./App";
import About from "./About";
import Blogs from "./Blogs";
import Header from './Header';

const createRoutes = () => (
    <Router>
        <div>
            <Route component={Header} />
            <Route exact path="/" component={ App } />
            <Route path="/about" component = { About } />
            <Route path="/blogs" component = { Blogs } />
        </div>
    </Router>
);

export default createRoutes;

