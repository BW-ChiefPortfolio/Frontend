// Created and modified by Nathan Loveless 12/18/19
import { CHEF_REGISTER, CHEF_LOGIN, CHEF_LOGOUT, FETCH_RECIPE_START, FETCH_RECIPE_SUCCESS,
         FETCH_RECIPE_FAILURE, CREATE_RECIPE_START, CREATE_RECIPE_SUCCESS, CREATE_RECIPE_FAILURE,
         EDIT_RECIPE_START, EDIT_RECIPE_SUCCESS, EDIT_RECIPE_FAILURE, DELETE_RECIPE_START, 
         DELETE_RECIPE_SUCCESS, DELETE_RECIPE_FAILURE, CHEF_FETCH_DATA, CHEF_FETCH_DATA_LOGGEDIN,
         FETCH_INGREDIENTS, FETCH_MEASUREMENTS } from '../actions/actions';

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
                 //recipes: [],  // This just stores the ID of the recipe to pull down the chef's recipes                 
             },

             recipes: [{
                 ingredients: [{
                     name: '',
                     measurement: ''
                 }]
             }],

            //  recipes: [{
            //      id: '',
            //      title: '',
            //      image: '',
            //      mealType: '',
            //      description: '',
            //      Instructions: '',
            //      ingredients: [{}],
            //      isFetching: false,
            //      error: ''
            //  }],

            currentRecipe: [],
            ingredients: [],
            measurements: [],
            recipeNames: [],
            mealTypes: [],
            chefNames: [],
             isFetching: false,
             error: ''
            }

            // Chef is going to login
            // My recipes

            // Guest logins
            // goes to homepage
            // Sees all reciepes, unless they filter it


function reducer(state = initialState, action) {
    //produce(state, draft => {
    switch(action.type)
    {
        case CHEF_REGISTER:
            return { ...state, ...state.user,  user: action.payload }
        case CHEF_LOGIN:
            return { ...state, ...state.user, user: action.payload }
        case CHEF_FETCH_DATA:
            const newChefs = [];
            action.payload.forEach(item => {
                newChefs.push(item.first_name + ' ' + item.last_name);
            })               
            return {...state, chefNames: newChefs}; 
        case CHEF_FETCH_DATA_LOGGEDIN:
            return state;
        case CHEF_LOGOUT:
            return state;
        case FETCH_RECIPE_START:
            return { ...state, error: '', isFetching: true }
        case FETCH_INGREDIENTS:
            const newIngredients = [];
            action.payload.forEach(item => {
                newIngredients.push(item)
            })               
            return {...state, ingredients: newIngredients}; 
        case FETCH_MEASUREMENTS:
            const newMeasurements = [];
            action.payload.forEach(item => {
                newMeasurements.push(item)
            })               
            return {...state, measurements: newMeasurements};
        case FETCH_RECIPE_SUCCESS:
            //console.log('NL: reducers.js:, FETCH_RECIPE_SUCCESS: ', action.payload)
            // let newRecipes = [{ingredients: [{name: '', measurement: ''}]}];
            // let newName = '';
            // let newMeasurement = '';
            //action.payload.measurements.forEach(measure => {
                //newMeasurement = measure.measurement;
                // action.payload.ingredients.forEach(ingredient => {
                //     if(measure.ingredient_id === ingredient.id) {
                //         newName = ingredient.ingredient_name;
                //     }
                //     action.payload.recipes.forEach(recipe => {
                //         if(measure.recipe_id === recipe.id)
                //         newRecipes.ingredients.push({name: newName, measurement: newMeasurement })
                //     })
                // })
            //})
            //console.log('NL: reducers.js:, FETCH_RECIPE_SUCCESS: ', newRecipes)    
            //let newName = '';
            //let newMeasurement = '';
            //const newRecipes = [{}];
            // let newRecipe = [{
            //     ingredients: [{
            //         name: '',
            //         measurement: ''
            //     }]
            // }];
            let newRecipe = [];
            const newMealType = [];
            const newRecipeNames = [];
            //const combined = []
            action.payload.forEach(recipe => {
                newRecipe.push(recipe);
                newMealType.push(recipe.meal_type);
                newRecipeNames.push(recipe.title);
            });
            
            // })
            // state.measurements.forEach(measure => {
            //     newMeasurement = measure.measurement;
            //     state.ingredients.forEach(ingredient => {
            //         if(measure.ingredient_id === ingredient.id) {
            //             newName = ingredient.ingredient_name;
            //             let ingredients = {};
            //         ingredients['name'] = newName;
            //         ingredients['recipe_id'] = measure.recipe_id;
            //         ingredients['measurement'] = newMeasurement;  
            //         combined.push(ingredients) 
            //         }
            //     })
            // }) 
            // for(let i = 0; i < newRecipe.length; i++) {
            //     combined.forEach(final => {
            //         if(final.recipe_id === newRecipe[i].chef_id){
            //             console.log(newRecipe[i])
            //             //newRecipe[i].push(final);
            //         }
            //     })
            // }
            // newRecipe.forEach(recipe => {
            //     combined.forEach(final => {
            //         if(final.recipe_id === recipe.chef_id)
            //             recipe.push(final);
            //     })
            // });


           // console.log('NL: reducers.js: combined array: ', combined);
            
            // newRecipe.forEach(recipe => {
            //     if(measure.recipe_id === recipe.chef_id) {
            //         let ingredients = {};
            //         ingredients['name'] = newName;
            //         ingredients['measurement'] = newMeasurement;                        
            //         //newRecipe.push(ingredients);
            //         console.log('NL: newRecipe.forEach: Ingredients: ', ingredients);                            
            //     }
            // })
            return {...state, recipes: newRecipe, recipeNames: newRecipeNames, mealTypes: newMealType};

           //return state;
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





