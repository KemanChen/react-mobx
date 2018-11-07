import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import HomePage from '../views/homePage';
import About from '../views/about';
import Movie from '../views/movie';

const SubRoute = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/home/index" component={HomePage}/>
            <Route path="/home/movie" component={Movie}/>
            <Route path="/home/about" component={About}/>
            <Redirect from='*' to='/home/index'/>
        </Switch>
    )
};

export default SubRoute;