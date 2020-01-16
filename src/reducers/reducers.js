// Created and modified by Nathan Loveless 12/18/19
import { INIT_LOCAL_DATA, CHEF_REGISTER, CHEF_LOGIN, CHEF_LOGOUT, CREATE_RECIPE_SUCCESS, EDIT_RECIPE_SUCCESS, 
         DELETE_RECIPE_SUCCESS, CHEF_FETCH_DATA, CHEF_FETCH_DATA_LOGGEDIN, FETCH_RECIPE_SUCCESS_GUEST, 
         CREATE_INGREDIENT_SUCCESS, FETCH_FILTERED_RECIPES, EDIT_INGREDIENT_SUCCESS,
         DELETE_INGREDIENT_SUCCESS } from '../actions/actions';

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

             recipes: [{
                 id: '',
                 chefId: '',
                 title: '',
                 image: '',
                 mealType: '',
                 description: '',
                 instructions: '',                 
             }],

             ingredients: [{
                id: '',
                recipe_id: '',
                ingredient: '',
                quantity: '',
                measurement: '',
                notes: ''
            }],
            
            filteredRecipes: [{}],
             isFetching: false,
             error: ''
            }

            

function reducer(state = initialState, action) {
    switch(action.type)
    {
        case INIT_LOCAL_DATA:
        return { ...state, recipes: action.payload.recipes, ingredients: action.payload.ingredients};
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
        case FETCH_FILTERED_RECIPES:    
            const recipeFilter = state.recipes.filter(function(item) {
                    return parseInt(state.user.id) === parseInt(item.chefId);
                    });
            return { ...state, filteredRecipes: recipeFilter }; 
        case FETCH_RECIPE_SUCCESS_GUEST:   
        return { ...state, recipes: action.payload.recipes, ingredients: action.payload.ingredients};
        case CREATE_RECIPE_SUCCESS:
            return { ...state, recipes: [ ...state.recipes, action.payload] };
        case CREATE_INGREDIENT_SUCCESS:
            return { ...state, ingredients: [ ...state.ingredients, action.payload] };
        case EDIT_RECIPE_SUCCESS:             
            const newRecipes = state.recipes.map(recipe => {
                if(recipe.id === action.payload.id) {
                    return action.payload;
                }
                return recipe;
                })
                return {...state, recipes: newRecipes}
        case EDIT_INGREDIENT_SUCCESS:
            const newIngredients = state.ingredients.map(ingredient => {
                if(ingredient.id === action.payload.id) {
                    return action.payload;
                }                
                return ingredient;
                })
                return {...state, ingredients: newIngredients}
        case DELETE_RECIPE_SUCCESS:
            const keepRecipes = state.recipes.filter(recipes => {
                if(recipes.id === action.payload.id) {
                  return false;
                }
                return true;
              });
              return {...state, recipes: keepRecipes}
        case DELETE_INGREDIENT_SUCCESS:
            const keepIngredients = state.ingredients.filter(ingredient => {
                if(ingredient.id === action.payload.id) {
                    return false;
                }                
                return true;
                })
                return {...state, ingredients: keepIngredients}
        default:
            return state;
    }
}

export default reducer;





