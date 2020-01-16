import React from "react";
import useForm from "react-hook-form";

import {
  Button,
  TextField,
  Grid,
  Container,
  CssBaseline
} from "@material-ui/core";

import LoginFormStyles from "../styles/_LoginStyle";
import { createRecipe } from "../actions/actions";
import { connect } from "react-redux";

const CreatePost = (props) => {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    const newRecipe = {
      id: Date.now(),
      chefId: localStorage.getItem('id'),
      title: data.title,
      image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      mealType: data.meal_type,
      description: data.description,
      instructions: data.instructions
    }

    // gather the ingredients and put them in the newRecipe array
    const ing1 = { id: Date.now() + 1, recipe_id: newRecipe.id, ingredient: data.ingredient1, quantity: data.amount1, measurement: data.unit1, notes: data.notes1}
    const ing2 = { id: Date.now() + 2, recipe_id: newRecipe.id,ingredient: data.ingredient2, quantity: data.amount2, measurement: data.unit2, notes: data.notes2}
    const ing3 = { id: Date.now() + 3, recipe_id: newRecipe.id,ingredient: data.ingredient3, quantity: data.amount3, measurement: data.unit3, notes: data.notes3}
    const ing4 = { id: Date.now() + 4, recipe_id: newRecipe.id,ingredient: data.ingredient4, quantity: data.amount4, measurement: data.unit4, notes: data.notes4}
    const ing5 = { id: Date.now() + 5, recipe_id: newRecipe.id,ingredient: data.ingredient5, quantity: data.amount5, measurement: data.unit5, notes: data.notes5}

    const newIngredients = [];
    if(data.ingredient1 !== '')
      newIngredients.push(ing1);
    if(data.ingredient2 !== '')
      newIngredients.push(ing2);
    if(data.ingredient3 !== '')
      newIngredients.push(ing3);
    if(data.ingredient4 !== '')
      newIngredients.push(ing4);
    if(data.ingredient5 !== '')
      newIngredients.push(ing5);

    props.createRecipe({newRecipe, newIngredients}, props)
  };

  //NOTE: Invokes the styling defined in variable useStyle.
  const LoginFormStyle = LoginFormStyles();

  return (
    <React.Fragment>
      {/* Adds a rest.css workaround */}
      <CssBaseline />
      <div className={LoginFormStyle.mainWrapper}>
        <Container maxWidth="lg" className={LoginFormStyle.mainContainer}>
          <div className="title">
            <h2>Add Recipe</h2>
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
              Add
            </Button>
          </form>
        </Container>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { createRecipe })(CreatePost);
