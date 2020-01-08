// Created by Nathan Loveless modified by Nathan and Giovani 12/19/19
import React, { useState } from "react";
import { connect } from "react-redux";
import { chefLogin, fetchRecipes } from "../actions/actions";
import useForm from "react-hook-form";
import { Link } from "react-router-dom";
import { userData, recipes } from '../server';


//NOTE: Logo
import logo from "../images/logov2.png";

import LoginFormStyles from "../styles/_LoginStyle";

//NOTE: Material UI
import {
  Button,
  CssBaseline,
  TextField,
  Grid,
  Typography,
  Container
} from "@material-ui/core";

const LoginForm = props => {
  const { register, errors, handleSubmit } = useForm();

  // This is test code with Server.js
const [recipeData, setRecipeData] = useState(recipes);
const [user, setUser] = useState(userData);

  //NOTE: When the form is submitted it will gather the data from the form the user inputed...
  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log("data : ", data);    
    //props.chefLogin(data, props);
    props.fetchRecipes();
    console.log('nl: LoginForm: onSubmit: ', props);
  };

  //NOTE: Invokes the styling defined in variable useStyle.
  const LoginFormStyle = LoginFormStyles();

  return (
    <React.Fragment>
      <div className={LoginFormStyle.mainWrapper}>
        <img className={LoginFormStyle.logo} src={logo} alt="Logo" />
        <Container maxWidth="xs" className={LoginFormStyle.mainContainer}>
          <CssBaseline />
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={LoginFormStyle.form}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  htmlFor="email"
                  inputRef={register({
                    required: "You must provide an Email",
                    pattern: {
                      /*{value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: "Please provide a valid Email!"
                    }*/
                    }
                  })}
                />
                {/*NOTE: Responsible for displaying the errors*/}
                {errors.email && errors.email.message}
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  type="password"
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  id="password"
                  autoComplete="current-password"
                  htmlFor="password"
                  inputRef={register({
                    minLength: {
                      value: 6,
                      message: "Minimum Length is 6"
                    }
                  })}
                />
                {/*NOTE: Responsible for displaying the errors ----  Also, looking for patterns to add to the password to make it more secure [/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/] example for*/}
                {errors.password && errors.password.message}
              </Grid>
            </Grid>
            <br></br>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={LoginFormStyle.submit}
              type="submit"
            >
              Sign In
            </Button>
          </form>
          <Grid container justify="flex-end">
            <Grid item>
              {/*NOTE: Now links to the login component [ Future addition: Will have a post request to chef dashboard when user signs up ] */}
              <Link
                className={LoginFormStyle.links}
                to="/chefsignup"
                variant="body2"
              >
                Don't have an account?{" "}
                <span className={LoginFormStyle.signUp}>Sign Up</span>
              </Link>
            </Grid>
          </Grid>
        </Container>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  user: state.user,
  recipes: state.recipes
});

export default connect(
  mapStateToProps, { chefLogin, fetchRecipes })(LoginForm);
