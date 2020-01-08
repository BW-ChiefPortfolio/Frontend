// Created and modified by Nathan Loveless 12/18/19
import axios from 'axios';
import { axiosWithAuth } from '../components/axiosWithAuth';


//*** Reducer Types ***//
export const CHEF_REGISTER = 'CHEF_REGISTER';
export const CHEF_LOGIN = 'CHEF_LOGIN';
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

    console.log('nl: actions.js: chefRegister, input data: ', data);

    // This is the real code we need eventually
     axios
    .post('http://cpbackend.herokuapp.com/auth/register', data)
    .then(res => {
        localStorage.setItem('token', res.data.payload);
        dispatch({type: CHEF_REGISTER, payload: res.data});
        props.history.push('/chefdashboard');
    })
    .catch(err => console.log(err.message));
}

export const chefLogin = (data, props) => dispatch => {
    //dispatch({type: CHEF_LOGIN, payload: data});
    console.log('nl: actions.js: chefLogin: TestCode: ', data);

    //This is the real code we need eventually
    axios
    .post('http://cpbackend.herokuapp.com/auth/login', { username: data.email, password: data.password })
    .then(res => {
        localStorage.setItem('token', res.data.payload);
        dispatch({type: CHEF_LOGIN, payload: res.data});
        props.history.push('/chefdashboard');
    })
    .catch(err => console.log(err.message));
}

export const chefLogout = () => dispatch => {

}

export const fetchRecipes = () => dispatch => {
    // Fetch recipes will either display ChefRecipes
    // or display all recipes if it is a guest
    // For testing we are just assuming they are logged in
    // console.log('nl: actions.js: fetchRecipes: TestCode: ', data);
    // dispatch({ type: FETCH_RECIPE_START });
    // dispatch({type: FETCH_RECIPE_SUCCESS, payload: data})
    
    console.log('inside fetchRecipes: ');
    axios
    .get("http://cpbackend.herokuapp.com/recipes")
    .then(res => {
        dispatch({type: FETCH_RECIPE_SUCCESS, payload: res.data})
        console.log('nl: actions.js: fetchRecipes: TestCode: ', res.data);
    })
    .catch(err => console.log(err.message));
}

export const createRecipe = () => dispatch => {
    dispatch({type: CREATE_RECIPE_START})
}

export const editRecipe = () => dispatch => {
    dispatch({type: EDIT_RECIPE_START});
}

export const deleteRecipe = () => dispatch => {
    dispatch({type: DELETE_RECIPE_START});
}