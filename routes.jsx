import React from 'react';
import {Redirect} from 'react-router-dom';

import Home from './src/views/home';
import About from './src/views/about';

export function createRootRoutes() {
    return [
        {
            key: "root_index",
            path: "/",
            render: () => (
                <Redirect to="/home"/>
            ),
            exact: true
        },
        {
            key: "home",
            path: "/home",
            component: <Home/>
        },
        {
            key: "about",
            path: "/about",
            component: <About/>
        }
    ]
}