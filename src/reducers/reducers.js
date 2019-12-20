// Created and modified by Nathan Loveless 12/18/19
import { CHEF_LOGIN, CHEF_LOGOUT, FETCH_RECIPE_START, FETCH_RECIPE_SUCCESS,
         FETCH_RECIPE_FAILURE, CREATE_RECIPE_START, CREATE_RECIPE_SUCCESS, CREATE_RECIPE_FAILURE,
         EDIT_RECIPE_START, EDIT_RECIPE_SUCCESS, EDIT_RECIPE_FAILURE, DELETE_RECIPE_START, 
         DELETE_RECIPE_SUCCESS, DELETE_RECIPE_FAILURE } from '../actions/actions';

         // The user: (The Chef) and the recipes are being stored together in the store.
         // This means that if a Chef is logged in only his recipes are stored in the reciepes object
         // If a non-logged in user is on the page, the token is blank, and the whole recipe dataset is loaded so the user can see them
         // unless they filter it.
         const initialState = {
             user: { 
                 name: '',
                 location: '',
                 contactEmail: '',
                 recipes: [],  // This just stores the ID of the recipe to pull down the chef's recipes
                 username: '',
                 password: ''
             },

             recipes: {
                 id: '',
                 title: '',
                 image: '',
                 mealType: '',
                 Instructions: ''
             },

             isFetching: false,
             error: ''
            }


            // Chef is going to login
            // My recipes

            // Guest logins
            // goes to homepage
            // Sees all reciepes, unless they filter it


function reducer(state = initialState, action) {
    switch(action.type)
    {
        case CHEF_LOGIN:
            return state;
        case CHEF_LOGOUT:
            return state;
        case FETCH_RECIPE_START:
            return state;
        case FETCH_RECIPE_SUCCESS:
            return state;
        case FETCH_RECIPE_FAILURE:
            return state;
        case CREATE_RECIPE_START:
            return state;
        case CREATE_RECIPE_SUCCESS:
            return state;
        case CREATE_RECIPE_FAILURE:
            return state;
        case EDIT_RECIPE_START:
            return state;
        case EDIT_RECIPE_SUCCESS:
            return state;
        case EDIT_RECIPE_FAILURE:
            return state;
        case DELETE_RECIPE_START:
            return state;
        case DELETE_RECIPE_SUCCESS:
            return state;
        case DELETE_RECIPE_FAILURE:
            return state;
        default:
            return state;
    }


}

export default reducer;





