// Created and modified by Nathan Loveless 12/18/19
import axios from 'axios';

//*** Reducer Types ***//
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
export const chefLogin = (credentials) => dispatch => {
    axios
    .post('http://localhost:xxxx/api/login', credentials)
    .then(res => {
        localStorage.setItem('token', res.data.payload);
        dispatch({type: CHEF_LOGIN, payload: res.data});
    })
    .catch(err => console.log(err.message));
}

export const chefLogout = () => dispatch => {

}

export const fetchRecipes = () => dispatch => {
    dispatch({ type: FETCH_RECIPE_START });
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