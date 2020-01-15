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
import { editRecipe, editIngredient, deleteRecipe, deleteIngredient } from '../actions/actions';

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
    console.log('NL: EditPost.js: onSubmit editedRecipe: ', editedRecipe);
    props.editRecipe(editedRecipe, props);
    props.editIngredient([editedIngredients1, editedIngredients2, editedIngredients3, editedIngredients4, editedIngredients5], props);
  };

  const onDeleteRecipe = e => {
    props.deleteRecipe(editedRecipe, props);
    props.deleteIngredient([editedIngredients1, editedIngredients2, editedIngredients3, editedIngredients4, editedIngredients5], props);
  }

  const handleRecipeChange = e => {
    const { name, value } = e.target;
    const temp = {...editedRecipe};
    temp[name] = value
    setEditedRecipe(temp);
  }

  const handleIngredientChange1 = e => {
    const {name, value } = e.target;
    const temp = {...editedIngredients1};
    temp[name] = value;
    setEditedIngredients1(temp);
  }

  const handleIngredientChange2 = e => {
    const {name, value } = e.target;
    const temp = {...editedIngredients2};
    temp[name] = value;
    setEditedIngredients2(temp);
  }

  const handleIngredientChange3 = e => {
    const {name, value } = e.target;
    const temp = {...editedIngredients3};
    temp[name] = value;
    setEditedIngredients3(temp);
  }
  const handleIngredientChange4 = e => {
    const {name, value } = e.target;
    const temp = {...editedIngredients4};
    temp[name] = value;
    setEditedIngredients4(temp);
  }

  const handleIngredientChange5 = e => {
    const {name, value } = e.target;
    const temp = {...editedIngredients5};
    temp[name] = value;
    setEditedIngredients5(temp);
  }

  const deleteRecipe = e => {
    props.deleteRecipe(editedRecipe, props);
    props.deleteIngredient([editedIngredients1, editedIngredients2, editedIngredients3, editedIngredients4, editedIngredients5], props);
  }
 
  const handleRecipeLoad =  e => {
    const selectedRecipe = props.filteredRecipes.filter(function (recipe) { return e.target.value === recipe.title});
    console.log('NL: EditPost.js: handleRecipeLoad: selectedRecipe: ', selectedRecipe);
    setEditedRecipe(selectedRecipe[0]);

    const selectedIngredients = props.ingredients.filter(function (ingredient) { return selectedRecipe[0].id === ingredient.recipe_id})

    setEditedIngredients1(selectedIngredients[0]);
    setEditedIngredients2(selectedIngredients[1]);
    setEditedIngredients3(selectedIngredients[2]);
    setEditedIngredients4(selectedIngredients[3]);
    setEditedIngredients5(selectedIngredients[4]);
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
              {/*<Delete recipe={editedRecipe} ingredients={[editedIngredients1, editedIngredients2, editedIngredients3, editedIngredients4, editedIngredients5]} />*/}
            <button onClick={onDeleteRecipe}>Delete</button>
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
                  onChange={handleRecipeChange}
                  inputRef={register({
                    maxLength: {
                      value: 30,
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
                  onChange={handleRecipeChange}
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
                  onChange={handleRecipeChange}
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
                  id="mealType"
                  label="Meal Type"
                  name="mealType"
                  value={editedRecipe.mealType || ''}
                  htmlFor="meal_type"
                  onChange={handleRecipeChange}
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
                  label="quantity"
                  name="quantity"
                  value={editedIngredients1.quantity || ''}
                  htmlFor="amount1"
                  onChange={handleIngredientChange1}
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
                  name="measurement"
                  value={editedIngredients1.measurement || ''}
                  htmlFor="unit1"
                  onChange={handleIngredientChange1}
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
                  name="ingredient"
                  value={editedIngredients1.ingredient || ''}
                  htmlFor="ingredient1"
                  onChange={handleIngredientChange1}
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
                  htmlFor="notes1"
                  onChange={handleIngredientChange1}
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
                  label="quantity"
                  name="quantity"
                  value={editedIngredients2.quantity || ''}
                  htmlFor="amount2"
                  onChange={handleIngredientChange2}
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
                  name="measurement"
                  value={editedIngredients2.measurement || ''}
                  htmlFor="unit2"
                  onChange={handleIngredientChange2}
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
                  name="ingredient"
                  value={editedIngredients2.ingredient || ''}
                  htmlFor="ingredient2"
                  onChange={handleIngredientChange2}
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
                  name="notes"
                  value={editedIngredients2.notes || ''}
                  htmlFor="notes2"
                  onChange={handleIngredientChange2}
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
                  label="quantity"
                  name="quantity"
                  value={editedIngredients3.quantity || ''}
                  htmlFor="amount3"
                  onChange={handleIngredientChange3}
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
                  name="measurement"
                  value={editedIngredients3.measurement || ''}
                  htmlFor="unit3"
                  onChange={handleIngredientChange3}
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
                  name="ingredient"
                  value={editedIngredients3.ingredient || ''}
                  htmlFor="ingredient3"
                  onChange={handleIngredientChange3}
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
                  name="notes"
                  value={editedIngredients3.notes || ''}
                  htmlFor="notes3"
                  onChange={handleIngredientChange3}
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
                  label="quantity"
                  name="quantity"
                  value={editedIngredients4.quantity || ''}
                  htmlFor="amount4"
                  onChange={handleIngredientChange4}
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
                  name="measurement"
                  value={editedIngredients4.measurement || ''}
                  htmlFor="unit4"
                  onChange={handleIngredientChange4}
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
                  name="ingredient"
                  value={editedIngredients4.ingredient || ''}
                  htmlFor="ingredient4"
                  onChange={handleIngredientChange4}
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
                  name="notes"
                  value={editedIngredients4.notes || ''}
                  htmlFor="notes4"
                  onChange={handleIngredientChange4}
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
                  label="quantity"
                  name="quantity"
                  value={editedIngredients5.quantity || ''}
                  htmlFor="amount5"
                  onChange={handleIngredientChange5}
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
                  name="measurement"
                  value={editedIngredients5.measurement || ''}
                  htmlFor="unit5"
                  onChange={handleIngredientChange5}
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
                  name="ingredient"
                  value={editedIngredients5.ingredient || ''}
                  htmlFor="ingredient5"
                  onChange={handleIngredientChange5}
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
                  name="notes"
                  value={editedIngredients5.notes || ''}
                  htmlFor="notes5"
                  onChange={handleIngredientChange5}
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

export default connect(mapStateToProps, {editRecipe, editIngredient, deleteRecipe, deleteIngredient })(EditPost);
