// Created and modified by Nathan Loveless 12/18/19
import { CHEF_REGISTER, CHEF_LOGIN, CHEF_LOGOUT, FETCH_RECIPE_START, FETCH_RECIPE_SUCCESS,
         FETCH_RECIPE_FAILURE, CREATE_RECIPE_START, CREATE_RECIPE_SUCCESS, CREATE_RECIPE_FAILURE,
         EDIT_RECIPE_START, EDIT_RECIPE_SUCCESS, EDIT_RECIPE_FAILURE, DELETE_RECIPE_START, 
         DELETE_RECIPE_SUCCESS, DELETE_RECIPE_FAILURE, CHEF_FETCH_DATA, CHEF_FETCH_DATA_LOGGEDIN,
         FETCH_RECIPE_SUCCESS_GUEST } from '../actions/actions';

         // The user: (The Chef) and the recipes are being stored together in the store.
         // This means that if a Chef is logged in only his recipes are stored in the reciepes object
         // If a non-logged in user is on the page, the token is blank, and the whole recipe dataset is loaded so the user can see them
         // unless they filter it.
         const initialState = {
             user: { 
                 id: '',
                 first_name: '',
                 last_name: '',
                 location: '',
                 contact: '',
                 username: '',
                 password: '',
                 email_address: '',
                 avatar_url: ''           
             },

             chefRecipes: [{
                 id: '',
                 chefId: '',
                 title: '',
                 image: '',
                 mealType: '',
                 description: '',
                 instructions: '',
                 ingredients: [{
                     ingredient: '',
                     quantity: '',
                     measurement: '',
                     notes: ''
                 }]
             }],

            currentRecipe: [],
            ingredients: [],
            measurements: [],
            recipeNames: [],
            mealTypes: [],
            chefNames: [],
             isFetching: false,
             error: ''
            }

function reducer(state = initialState, action) {
    //produce(state, draft => {
    switch(action.type)
    {
        case CHEF_REGISTER:
            return { ...state, ...state.user,  user: action.payload }
        case CHEF_LOGIN:
            return { ...state, ...state.user, user: action.payload }
        case CHEF_FETCH_DATA:
             return state;
        case CHEF_FETCH_DATA_LOGGEDIN:
            return {...state, user: {
                ...state.user, id: action.payload.id, first_name: action.payload.first_name, last_name: action.payload.last_name,
                location: action.payload.location, contact: action.payload.contact, avatar_url: action.payload.avatar_url, 
                username: action.payload.username, password: action.payload.password, email_address: action.payload.email_address } }
                
        case CHEF_LOGOUT:
            return state;
        case FETCH_RECIPE_START:
            return { ...state, error: '', isFetching: true }
        case FETCH_RECIPE_SUCCESS:            
            const filteredRecipes = action.payload.filter(function(item) {
                    return state.user.id !== item.chefId;
                    });
            return { ...state, chefRecipes: filteredRecipes};
        case FETCH_RECIPE_SUCCESS_GUEST: 
                    console.log(action.payload);
            return { ...state, chefRecipes: action.payload};
        case FETCH_RECIPE_FAILURE:
            return { ...state, error: action.payload, isFetching: false}
        case CREATE_RECIPE_START:
            return { ...state, error: '', isFetching: true }
        case CREATE_RECIPE_SUCCESS:
            return { ...state, recipes: [...state.recipes, action.payload]}
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
//})
}

export default reducer;





