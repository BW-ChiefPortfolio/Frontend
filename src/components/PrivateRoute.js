import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...otherComponents}) => {

    // Once login/signup is fixed we will uncomment this.  This prevents .getItem('token') undefined state
    // from passing through the if() statement.  undefined, supposed to be null, but shouldn't be falling
    // through the if statement, should be redirecting to landing page.
     //const userToken = localStorage.getItem('token');
    // const isLoggedIn = (userToken === undefined) ? true : false;
    //console.log('PrivateRoute: Outside return: ', userToken);
    return (
    <Route
    {...otherComponents}
    render={() => {
        if(localStorage.getItem('token')) {
            //if(isLoggedIn) {
            console.log('nl: PrivateRoute render: localStorage: ', localStorage.getItem('token'));
            return <Component />;
        }
        else {
            return <Redirect to='/'/>;
        }
    }}
    />
    );
}

export default PrivateRoute;