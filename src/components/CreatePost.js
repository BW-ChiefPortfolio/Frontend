/*Future updates: 

=> Add Image Selector?

*/

import React, { useState } from "react";
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
      title: data.title,
      //Added this -giovani
      description: data.description,
      instructions: data.instructions,
      meal_type: data.meal_type,
      chef_id: localStorage.getItem('id'),
      pic_url: ''
    }
    props.createRecipe(newRecipe, props)
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
