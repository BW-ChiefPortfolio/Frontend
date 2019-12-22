// Created by Nathan Loveless modified by Nathan and Giovani 12/19/19
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { chefLogin } from '../actions/actions';

const LoginForm = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });

    const handleChange = e => {

        // This is not the redux state, this is just storing values to pass to login function
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    const login = e => {
        e.preventDefault();
        chefLogin(credentials);

    }

    return (
        // NOTE: This is just placeholder stuff to get things setup
        // this is the page where the chef can login or signup
        <div>
            <div>
                <h2> Login </h2>
            </div>
            <form onSubmit={login}>
                Username:
                <input
                    type='text'
                    name='username'
                    value={credentials.username}
                    onChange={handleChange}
                />
                Password:
                <input
                    type='password'
                    name='password'
                    value={credentials.password}
                    onChange={handleChange}
                />
                <button>Login</button>
            </form>
        </div>

    );

}

const mapStateToProps = state => ({
    user: state.user,
    recipes: state.recipes
});

export default connect(mapStateToProps, { chefLogin })(LoginForm);