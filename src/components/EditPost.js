//This is going to stay as its own component.

/*Future updates: 

=> Get the recipes info and place it into the form as data 
so the user can see what they are changing 

=> Style - I will leave this in the end. Want to make sure the components
 are functioning first.

*/

import React, { useState } from "react";
import {
  Button,
  TextField,
  Grid,
  Container,
  CssBaseline
} from "@material-ui/core";
import useForm from "react-hook-form";
import LoginFormStyles from "../styles/_LoginStyle";
import { connect } from "react-redux";
import { editRecipe } from '../actions/actions';

import Delete from "./Delete";

const EditPost = (props) => {
  const { register, errors, handleSubmit } = useForm();
  const [editedRecipe, setEditedRecipe] = useState({});
const [editedIngredients1, setEditedIngredients1] = useState({});
const [editedIngredients2, setEditedIngredients2] = useState({});
const [editedIngredients3, setEditedIngredients3] = useState({});
const [editedIngredients4, setEditedIngredients4] = useState({});
const [editedIngredients5, setEditedIngredients5] = useState({});


  const onSubmit = (data, e) => {
    console.log('NL: EditPost.js: onSubmit data: ', data);

  };

  const handleRecipeLoad =  e => {
    const selectedRecipe = props.filteredRecipes.filter(function (recipe) { return e.target.value === recipe.title});
    console.log('NL: EditPost.js: handleRecipeLoad: selectedRecipe: ', selectedRecipe);
    const newRecipe =  { id: selectedRecipe[0].id, chefId: selectedRecipe[0].chefId, title: selectedRecipe[0].title, description: selectedRecipe[0].description, instructions: selectedRecipe[0].instructions, mealType: selectedRecipe[0].mealType}
    console.log('NL: EditPost.js: handleRecipeLoad: newRecipe: ', newRecipe);


    setEditedRecipe(selectedRecipe[0]);
    console.log('NL: EditPost.js: handleRecipeLoad: editedRecipe: ', editedRecipe);

    // editedRecipe.ChefId = selectedRecipe[0].ChefId;
    // editedRecipe.id = selectedRecipe[0].id;
    // editedRecipe.title = selectedRecipe[0].title;
    // editedRecipe.description = selectedRecipe[0].description;
    // editedRecipe.instructions = selectedRecipe[0].instructions;
    // editedRecipe.mealType = selectedRecipe[0].mealType;
    // console.log('NL: EditPost.js: handleRecipeLoad: editedRecipe: ', editedRecipe);




    // const selectedIngredients = props.ingredients.filter(function (ingredient) { console.log('NL: EditPost.js: handleRecipeLoad: ingredient.recipe_id: ', ingredient.recipe_id, "editedRecipe.id", editedRecipe.id); return editedRecipe.id === ingredient.recipe_id})
    // console.log('NL: EditPost.js: handleRecipeLoad: editedRecipe.id: ', editedRecipe.id)
    // console.log('NL: EditPost.js: handleRecipeLoad: selectedIngredients: ', selectedIngredients);




    // setEditedIngredients1(selectedIngredients[0]);
    // setEditedIngredients2(selectedIngredients[1]);
    // setEditedIngredients3(selectedIngredients[2]);
    // setEditedIngredients4(selectedIngredients[3]);
    // setEditedIngredients5(selectedIngredients[4]);
    // setEditedIngredients(selectedIngredients);
    // console.log('NL: EditPost.js: handleRecipeLoad: selectedIngredients: ', selectedIngredients);
    // console.log('NL: EditPost.js: handleRecipeLoad: editedIngredients: ', editedIngredients);

    // if(selectedIngredients[0].title !== '')
    //   editedIngredients[0] = selectedIngredients[0];
    //   if(selectedIngredients[1].title !== '')
    //   editedIngredients[1] = selectedIngredients[1];
    //   if(selectedIngredients[2].title !== '')
    //   editedIngredients[2] = selectedIngredients[2];
    //   if(selectedIngredients[3].title !== '')
    //   editedIngredients[3] = selectedIngredients[3];
    //   if(selectedIngredients[4].title !== '')
    //   editedIngredients[4] = selectedIngredients[4];
   }

  //NOTE: Invokes the styling defined in variable useStyle.
  const LoginFormStyle = LoginFormStyles();
  return (
    /*I am going to copy the CreatePost.js component form into here
        so it stays consistant with its fields and design.
        */

    <React.Fragment>
      <CssBaseline />
      <div className={LoginFormStyle.mainWrapper}>
        <Container maxWidth="lg" className={LoginFormStyle.mainContainer}>
          <div className={LoginFormStyle.topText}>
            <h2> Edit Recipes </h2>
            <div>
              {/* The basic of a dropdown */}
              <select
                id="dropdown"
                name="recipe-select"
                className={LoginFormStyle.select}
                onChange={handleRecipeLoad}
              >

                <option>Select Item</option>
                {props.filteredRecipes.map((item) => 
                  <option value={item.title}>
                    {item.title}
                  </option>

                )}
              </select>

              {/* This the delete button. Visit Delete.js to work on it.*/}
              <Delete />
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="">
          <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  variant="outlined"
                  required
                  fullWidth                  
                  id="title"
                  label="Title"
                  name="title"
                  value={editedRecipe.title || '' }
                  autoComplete="title"
                  htmlFor="text"
                  inputRef={register({
                    maxLength: {
                      value: 20,
                      message: "It looks like your title is too long."
                    }
                  })}
                />
                {errors.title && errors.title.message}
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  variant="outlined"
                  fullWidth
                  id="description"
                  label="Description"
                  name="description"
                  value={editedRecipe.description || ''}
                  htmlFor="description"
                  inputRef={register}
                  />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  variant="outlined"
                  required
                  fullWidth
                  id="instructions"
                  label="Instructions"
                  name="instructions"
                  value={editedRecipe.instructions || ''}
                  htmlFor="instructions"
                  inputRef={register({
                    required:
                      "You must provide the instructions to this recipes!"
                  })}
                />
                {/*NOTE: Responsible for displaying the errors*/}
                {errors.instructions && errors.instructions.message}
              </Grid>
            </Grid>
            {/* Made this field not required :& Added the create data flow */}
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  variant="outlined"
                  fullWidth
                  id="meal_type"
                  label="Meal Type"
                  name="meal_type"
                  value={editedRecipe.mealType || ''}
                  htmlFor="meal_type"
                  inputRef={register}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={1}>
                <TextField
                  type="text"
                  variant="outlined"
                  fullWidth                
                  id="amount1"
                  label="amount"
                  name="amount1"
                  value={editedIngredients1.quantity || ''}
                  htmlFor="amount1"
                  inputRef={register}
                />
                </Grid>
                <Grid item xs={1}>
                <TextField
                  type="text"
                  variant="outlined"
                  fullWidth               
                  id="unit1"
                  label="unit"
                  name="unit1"
                  value={editedIngredients1.unit || ''}
                  htmlFor="unit1"
                  inputRef={register}
                />
                </Grid>
                <Grid item xs={3}>
                <TextField
                  type="text"
                  variant="outlined"
                  fullWidth
                  id="ingredient1"
                  label="ingredient"
                  name="ingredient1"
                  value={editedIngredients1.ingredient || ''}
                  htmlFor="ingredient1"
                  inputRef={register}
                />
                </Grid>
                <Grid item xs={7}>
                <TextField
                  type="text"
                  variant="outlined"
                  fullWidth                  
                  id="notes1"
                  label="notes"
                  name="notes"
                  value={editedIngredients1.notes || ''}
                  htmlFor="notes"
                  inputRef={register}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={1}>
                <TextField
                  type="text"
                  variant="outlined"
                  fullWidth                
                  id="amount2"
                  label="amount"
                  name="amount2"
                  value={editedIngredients2.quantity || ''}
                  htmlFor="amount2"
                  inputRef={register}
                />
                </Grid>
                <Grid item xs={1}>
                <TextField
                  type="text"
                  variant="outlined"
                  fullWidth               
                  id="unit2"
                  label="unit"
                  name="unit2"
                  value={editedIngredients2.unit || ''}
                  htmlFor="unit2"
                  inputRef={register}
                />
                </Grid>
                <Grid item xs={3}>
                <TextField
                  type="text"
                  variant="outlined"
                  fullWidth
                  id="ingredient2"
                  label="ingredient"
                  name="ingredient2"
                  value={editedIngredients2.ingredient || ''}
                  htmlFor="ingredient2"
                  inputRef={register}
                />
                </Grid>
                <Grid item xs={7}>
                <TextField
                  type="text"
                  variant="outlined"
                  fullWidth                  
                  id="notes2"
                  label="notes"
                  name="notes2"
                  value={editedIngredients2.notes || ''}
                  htmlFor="notes2"
                  inputRef={register}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={1}>
                <TextField
                  type="text"
                  variant="outlined"
                  fullWidth                
                  id="amount3"
                  label="amount"
                  name="amount3"
                  value={editedIngredients3.quantity || ''}
                  htmlFor="amount3"
                  inputRef={register}
                />
                </Grid>
                <Grid item xs={1}>
                <TextField
                  type="text"
                  variant="outlined"
                  fullWidth               
                  id="unit3"
                  label="unit"
                  name="unit3"
                  value={editedIngredients3.unit || ''}
                  htmlFor="unit3"
                  inputRef={register}
                />
                </Grid>
                <Grid item xs={3}>
                <TextField
                  type="text"
                  variant="outlined"
                  fullWidth
                  id="ingredient3"
                  label="ingredient"
                  name="ingredient3"
                  value={editedIngredients3.ingredient || ''}
                  htmlFor="ingredient3"
                  inputRef={register}
                />
                </Grid>
                <Grid item xs={7}>
                <TextField
                  type="text"
                  variant="outlined"
                  fullWidth                  
                  id="notes3"
                  label="notes"
                  name="notes3"
                  value={editedIngredients3.notes || ''}
                  htmlFor="notes3"
                  inputRef={register}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={1}>
                <TextField
                  type="text"
                  variant="outlined"
                  fullWidth                
                  id="amount4"
                  label="amount"
                  name="amount4"
                  value={editedIngredients4.quantity || ''}
                  htmlFor="amount4"
                  inputRef={register}
                />
                </Grid>
                <Grid item xs={1}>
                <TextField
                  type="text"
                  variant="outlined"
                  fullWidth               
                  id="unit4"
                  label="unit"
                  name="unit4"
                  value={editedIngredients4.unit || ''}
                  htmlFor="unit4"
                  inputRef={register}
                />
                </Grid>
                <Grid item xs={3}>
                <TextField
                  type="text"
                  variant="outlined"
                  fullWidth
                  id="ingredient4"
                  label="ingredient"
                  name="ingredient4"
                  value={editedIngredients4.ingredient || ''}
                  htmlFor="ingredient4"
                  inputRef={register}
                />
                </Grid>
                <Grid item xs={7}>
                <TextField
                  type="text"
                  variant="outlined"
                  fullWidth                  
                  id="notes4"
                  label="notes"
                  name="notes4"
                  value={editedIngredients4.notes || ''}
                  htmlFor="notes4"
                  inputRef={register}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={1}>
                <TextField
                  type="text"
                  variant="outlined"
                  fullWidth                
                  id="amount5"
                  label="amount"
                  name="amount5"
                  value={editedIngredients5.quantity || ''}
                  htmlFor="amount5"
                  inputRef={register}
                />
                </Grid>
                <Grid item xs={1}>
                <TextField
                  type="text"
                  variant="outlined"
                  fullWidth               
                  id="unit5"
                  label="unit"
                  name="unit5"
                  value={editedIngredients5.unit || ''}
                  htmlFor="unit5"
                  inputRef={register}
                />
                </Grid>
                <Grid item xs={3}>
                <TextField
                  type="text"
                  variant="outlined"
                  fullWidth
                  id="ingredient5"
                  label="ingredient"
                  name="ingredient5"
                  value={editedIngredients5.ingredient || ''}
                  htmlFor="ingredient5"
                  inputRef={register}
                />
                </Grid>
                <Grid item xs={7}>
                <TextField
                  type="text"
                  variant="outlined"
                  fullWidth                  
                  id="notes5"
                  label="notes"
                  name="notes5"
                  value={editedIngredients5.notes || ''}
                  htmlFor="notes5"
                  inputRef={register}
                />
              </Grid>
            </Grid>
            <br></br>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={""}
              type="submit"
            >
              Edit
            </Button>
          </form>
        </Container>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  filteredRecipes: state.filteredRecipes,
  ingredients: state.ingredients,
  user: state.userData
});

export default connect(mapStateToProps, {editRecipe})(EditPost);
