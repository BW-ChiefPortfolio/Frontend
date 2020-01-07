// Created by Nathan Loveless modified by Nathan and Giovani 12/19/19
import React, { useState } from "react";
import { connect } from "react-redux";
import { chefLogin } from "../actions/actions";
import useForm from "react-hook-form";
import { Link } from "react-router-dom";

//NOTE: Logo
import logo from "../images/logo.png";

//NOTE: Material UI
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

//NOTE: A theme for this form using Material UI
const useStyles = makeStyles(theme => ({
  form: {
    width: "100%",
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  mainWrapper: {
    background: "#3DB1FF",
    display: "flex",
    alignItems: "center",
    marginBottom: "1rem",
    flexDirection: "column",
    height: "100vh"
  },
  mainContainer: {
    boxShadow: "0 2px 4px 0 rgba(181,181,181,.7)",
    borderTop: "1px solid #f1f1f5",
    padding: "2rem",
    background: "white"
  },

  logo: {
    marginTop: "1.5rem",
    marginBottom: "1.5rem"
  },
  innerForm: {
    display: "flex",
    justifyContent: "center",
    boxShadow: "0 2px 4px 0 rgba(181,181,181,.7)",
    borderTop: "1px solid #f1f1f5",
    padding: "2rem",
    background: "white",
    flexDirection: "row-reverse",
    marginBottom: "3rem"
  },
  signUpIntro: {
    marginLeft: "2rem"
  },
  signUpIcons: {
    display: "flex",
    alignItems: "center",
    marginTop: "1.5rem"
  },
  links: {
    textDecoration: "none",
    color: "#515050"
  }
}));
const LoginForm = () => {
  const { register, errors, handleSubmit } = useForm();
  //NOTE: When the form is submitted it will gather the data from the form the user inputed...
  const onSubmit = data => {
    console.log("data : ", data);
  };

  //NOTE: Invokes the styling defined in variable useStyle.
  const LoginFormStyle = useStyles();

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
                      value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: "Please provide a valid Email!"
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
              <Link className={LoginFormStyle.links} to="/chefsignup" variant="body2">
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Container>
      </div>
    </React.Fragment>
  );
};
export default LoginForm;
