// Created and modified by Nathan Loveless 12/18/19
import axios from 'axios';
import { axiosWithAuth } from '../components/axiosWithAuth';


//*** Reducer Types ***//
export const CHEF_REGISTER = 'CHEF_REGISTER';
export const CHEF_LOGIN = 'CHEF_LOGIN';
export const CHEF_FETCH_DATA = 'CHEF_FETCH_DATA';
export const CHEF_LOGOUT = 'CHEF_LOGOUT';
export const FETCH_RECIPE_START = 'FETCH_RECIPE_START';
export const FETCH_RECIPE_SUCCESS = 'FETCH_RECIPE_SUCCESS';
export const FETCH_RECIPE_FAILURE = 'FETCH_RECIPE_FAILURE';
export const CREATE_RECIPE_START = 'CREATE_RECIPE_START';
export const CREATE_RECIPE_SUCCESS = 'CREATE_RECIPE_SUCCESS';
export const CREATE_RECIPE_FAILURE = 'CREATE_RECIPE_FAILURE';
export const EDIT_RECIPE_START = 'EDIT_RECIPE_START';
export const EDIT_RECIPE_SUCCESS = 'EDIT_RECIPE_SUCCESS';
export const EDIT_RECIPE_FAILURE = 'EDIT_RECIPE_FAILURE';
export const DELETE_RECIPE_START = 'DELETE_RECIPE_START';
export const DELETE_RECIPE_SUCCESS = 'DELETE_RECIPE_SUCCESS';
export const DELETE_RECIPE_FAILURE = 'DELETE_RECIPE_FAILURE';
//*** END Reducer Types ***//

// Redux actions
// These are currently just shells
export const chefRegister = (data, props) => dispatch => {
     axios
    .post('https://cpbackend.herokuapp.com/auth/register', {
        first_name: data.firstName, 
        last_name: data.lastName,
        username: data.username,        
        email_address: data.email,
        password: data.password
    })
    .then(res => {
        localStorage.setItem('token', res.data.payload);
        data.id = res.data;
        dispatch({type: CHEF_REGISTER, payload: data});
        props.history.push('/chefdashboard');
    })
    .catch(err => console.log(err.message));    
}

export const chefLogin = (data, props) => dispatch => {
    console.log('NL: actions.js: chefLogin: data: ', data);
    axios
    .post('https://cpbackend.herokuapp.com/auth/login', { username: data.username, password: data.password })
    .then(res => {
        localStorage.setItem('token', res.data.payload);
        localStorage.setItem('id', res.data.id)
        localStorage.setItem('message', res.data.message);
        dispatch({type: CHEF_LOGIN, payload: res.data});
        props.history.push('/chefdashboard');
    })
    .catch(err => console.log(err.message));
}

export const chefFetchData = () => dispatch => {
    axiosWithAuth()
    .get('/auth/10')
    .then(res => {
    })
    .catch(err => console.log(err.message));
}

export const chefLogout = () => dispatch => {

}

export const fetchRecipes = () => dispatch => {
    dispatch({type: FETCH_RECIPE_START})
    // Fetch recipes will either display ChefRecipes
    // or display all recipes if it is a guest    
    if(localStorage.getItem('token')) {
        axios
        .get(`https://cpbackend.herokuapp.com/chefs/${localStorage.getItem('id')}/recipes`)
        .then(res => {            
            dispatch({type: FETCH_RECIPE_SUCCESS, payload: res.data}) 
        })
        .catch(err => console.log(err.message));
    }

    else {
    axios
        .get("https://cpbackend.herokuapp.com/recipes")
        .then(res => {
            
            dispatch({type: FETCH_RECIPE_SUCCESS, payload: res.data})        
        })
        .catch(err => console.log(err.message));
    }
}

export const createRecipe = (data, props) => dispatch => {
    dispatch({type: CREATE_RECIPE_START})
    console.log('NL: actions.js: createRecipe: data: ', data);

    axiosWithAuth()
    .post('/recipes')
    .then(res => {
        dispatch({type:CREATE_RECIPE_SUCCESS, payload: data })
        props.history.push('/chefdashboard');
    })
    .catch(err => console.log(err.message));
}

export const editRecipe = () => dispatch => {
    dispatch({type: EDIT_RECIPE_START});
}

export const deleteRecipe = () => dispatch => {
    dispatch({type: DELETE_RECIPE_START});
}