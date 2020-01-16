// Created and modified by Nathan Loveless 12/18/19
import axios from 'axios';
import { recipes, userData, ingredients } from '../serveralt';


//*** Reducer Types ***//
export const INIT_LOCAL_DATA = 'INIT_LOCAL_DATA';
export const CHEF_REGISTER = 'CHEF_REGISTER';
export const CHEF_LOGIN = 'CHEF_LOGIN';
export const CHEF_FETCH_DATA = 'CHEF_FETCH_DATA';
export const CHEF_FETCH_DATA_LOGGEDIN = 'CHEF_FETCH_DATA_LOGGEDIN';
export const CHEF_LOGOUT = 'CHEF_LOGOUT';
export const FETCH_RECIPE_SUCCESS = 'FETCH_RECIPE_SUCCESS';
export const FETCH_FILTERED_RECIPES = 'FETCH_FILTERED_RECIPES'
export const FETCH_RECIPE_SUCCESS_GUEST = 'FETCH_RECIPE_SUCCESS_GUEST'
export const CREATE_RECIPE_SUCCESS = 'CREATE_RECIPE_SUCCESS';
export const CREATE_INGREDIENT_SUCCESS = 'CREATE_INGREDIENT_SUCCESS';
export const EDIT_RECIPE_SUCCESS = 'EDIT_RECIPE_SUCCESS';
export const DELETE_RECIPE_SUCCESS = 'DELETE_RECIPE_SUCCESS';
export const DELETE_INGREDIENT_SUCCESS = 'DELETE_INGREDIENT_SUCCESS';
export const EDIT_INGREDIENT_SUCCESS = 'EDIT_INGREDIENT_SUCCESS';
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
export const initLocalData = () => dispatch => {
    dispatch({type: INIT_LOCAL_DATA, payload: { recipes, ingredients }});
}
export const chefFetchData = () => dispatch => {
        axios
        .get(`https://cpbackend.herokuapp.com/chefs/${localStorage.getItem('id')}`)
        .then(res => {           
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

export const fetchFilteredRecipes = () => dispatch => {
    if(localStorage.getItem('token')) {
        dispatch({type: FETCH_FILTERED_RECIPES})
    }
}

export const fetchRecipes = () => dispatch => {
    console.log('*****INSIDE ACTIONS: fetchRecipes NO-AUTH*****')
        dispatch({type: FETCH_RECIPE_SUCCESS_GUEST, payload: { recipes, ingredients }})    
}

export const createRecipe = (data, props) => dispatch => {
    dispatch({type:CREATE_RECIPE_SUCCESS, payload: data.newRecipe });
    
    data.newIngredients.forEach(ingredient => {
        dispatch({type: CREATE_INGREDIENT_SUCCESS, payload: ingredient }) 
    })    
      
    props.history.push('/chefdashboard');
}

export const editRecipe = (editedRecipe, props) => dispatch => {
    dispatch({type: EDIT_RECIPE_SUCCESS, payload: editedRecipe})    
    props.history.push('/chefdashboard');
}

export const editIngredient = (data, props) => dispatch => {
    data.forEach(ingredient => {
        dispatch({type: EDIT_INGREDIENT_SUCCESS, payload: ingredient})
    })
    props.history.push('/chefdashboard');
}

export const deleteRecipe = (editedRecipe, props) => dispatch => {
    dispatch({type: DELETE_RECIPE_SUCCESS, payload: editedRecipe})    
    props.history.push('/chefdashboard');
}

export const deleteIngredient = (data, props) => dispatch => {
    data.forEach(ingredient => {
        dispatch({type: DELETE_INGREDIENT_SUCCESS, payload: ingredient})
    })
    props.history.push('/chefdashboard');
}