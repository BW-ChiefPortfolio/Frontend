//This is going to stay as its own component.

/*Future updates: 

=> Get the recipes info and place it into the form as data 
so the user can see what they are changing 

=> Style - I will leave this in the end. Want to make sure the components
 are functioning first.

*/

import React from "react";
import {
  Button,
  TextField,
  Grid,
  Container,
  CssBaseline
} from "@material-ui/core";
import useForm from "react-hook-form";
import LoginFormStyles from "../styles/_LoginStyle";

import Delete from "./Delete";

const EditPost = () => {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log("data : ", data);
  };

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
                id="id"
                name="You-Can-Add-Name-Here"
                className={LoginFormStyle.select}
                onChange={"handleChange"}
              >
                <option>Select Item</option>
                {"options"}
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
                {errors.mealType && errors.mealtype.message}
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
              Edit
            </Button>
          </form>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default EditPost;
