import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch, Link} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Home from '../views/home';
import WrappedNormalLoginForm from '../views/login';

const customHistory = createBrowserHistory();
const RootRoute = () => {
    /*const routes = createRootRoutes();
    console.log('routes:', routes);
    const generateRoutes = () => {
        return routes.map(route => {
            if (route.component) {
                if (route.exact) {
                    return <Route key={route.key} exact path={route.path} component={route.component}/>
                } else {
                    return <Route key={route.key} path={route.path} component={route.component}/>
                }
            } else if (route.render) {
                if (route.exact) {
                    return <Route key={route.key} exact path={route.path} render={route.render}/>
                } else {
                    return <Route key={route.key} path={route.path} render={route.render}/>
                }
            }
        });
    };
    const rootRoute = generateRoutes();
    console.log('rootRoute:', rootRoute);
    let routeComponent = React.createElement(Switch, null, ...rootRoute);*/
    return (
        <Router basename='/'>
            <Switch>
                <Route exact path="/" component={WrappedNormalLoginForm}/>
                <Route path="/home" component={Home}/>
                <Redirect from='*' to='/'/>
            </Switch>
        </Router>
    )
};

export default RootRoute;