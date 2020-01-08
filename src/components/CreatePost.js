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

const CreatePost = () => {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log("data : ", data);
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
                    required: "You must provide a title for your post"
                  })}
                />
                {/*NOTE: Responsible for displaying the errors*/}
                {errors.title && errors.title.message}
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  variant="outlined"
                  required
                  fullWidth
                  id="mealtype"
                  label="Meal Type"
                  name="mealtype"
                  htmlFor="mealtype"
                  inputRef={register({
                    required: "You must provide the Meal Type!"
                  })}
                />
                {/*NOTE: Responsible for displaying the errors*/}
                {errors.mealtype && errors.mealtype.message}
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  variant="outlined"
                  required
                  fullWidth
                  id="ingredients"
                  label="Ingredients"
                  name="ingredients"
                  htmlFor="text"
                  inputRef={register({
                    required: "You must provide ingredients!"
                  })}
                />
                {/*NOTE: Responsible for displaying the errors*/}
                {errors.ingredients && errors.ingredients.message}
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

export default CreatePost;
