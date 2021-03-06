// Created and modified by Nathan Loveless 12/18/19
import axios from 'axios';
import { axiosWithAuth } from '../components/axiosWithAuth';
import { recipes, userData } from '../server';


//*** Reducer Types ***//
export const CHEF_REGISTER = 'CHEF_REGISTER';
export const CHEF_LOGIN = 'CHEF_LOGIN';
export const CHEF_FETCH_DATA = 'CHEF_FETCH_DATA';
export const CHEF_FETCH_DATA_LOGGEDIN = 'CHEF_FETCH_DATA_LOGGEDIN';
export const CHEF_LOGOUT = 'CHEF_LOGOUT';
export const FETCH_RECIPE_START = 'FETCH_RECIPE_START';
export const FETCH_RECIPE_SUCCESS = 'FETCH_RECIPE_SUCCESS';
export const FETCH_RECIPE_SUCCESS_GUEST = 'FETCH_RECIPE_SUCCESS_GUEST'
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
// **** START OF REAL API DATA ****
export const chefRegister = (data, props) => dispatch => {
     axios
    .post('https://cpbackend.herokuapp.com/auth/register', {
        first_name: data.first_name, 
        last_name: data.last_name,
        location: data.location,
        contact: data.contact,
        username: data.username,        
        password: data.password,
        email_address: data.email_address,
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
// **** END OF REAL API DATA ****

// **** START OF DUMMY DATA BACKEND IS NOT WORKING ****
export const chefFetchData = () => dispatch => {
    //if(localStorage.getItem('token')) {
        axios
        .get(`https://cpbackend.herokuapp.com/chefs/${localStorage.getItem('id')}`)
        .then(res => {           
            //console.log('NL: actions.js: chefFetchData: Authed: ', res.data);
            // Note since we are using real auth, but fake recipe data, I have to add some things 
            // that the backend doesn't so I can use the fake data.
            const userObj = {
                first_name: res.data[0].first_name,
                last_name: res.data[0].last_name,
                username: res.data[0].username,
                password: res.data[0].password,
                email_address: res.data[0].email_address,
                id: userData.id,
                contact: userData.contact,
                location: userData.location,
                avatar_url: userData.avatar_url,
                chefRecipes: userData.chefRecipes
            }
            dispatch({type: CHEF_FETCH_DATA_LOGGEDIN, payload: userObj});
            
        })
        .catch(err => console.log(err.message));   
}

export const chefLogout = () => dispatch => {

}

export const fetchRecipes = () => dispatch => {
     if(localStorage.getItem('token')) {
        dispatch({type: FETCH_RECIPE_SUCCESS, payload: recipes})
    }
    else {
        console.log('inside fetchRecipes no-auth: ')
            dispatch({type: FETCH_RECIPE_SUCCESS_GUEST, payload: recipes})    
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