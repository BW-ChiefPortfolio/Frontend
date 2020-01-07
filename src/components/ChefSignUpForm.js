//install: You must install react-hook-form.

//NOTE: Other imports
import React, { useState, useEffect } from "react";
import useForm from "react-hook-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { chefRegister } from "../actions/actions";

//NOTE: Logo
import logo from "../images/logov2.png";

//NOTE: Material UI
import {
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Typography,
  Container,
  Divider,
  Box
} from "@material-ui/core";
import ChefSignUpStyles from "../styles/_SignUpStyle";

//NOTE: This is a simpler way to create forms with validation. It renders less when a user inputs into the form...
const ChefSignUpForm = props => {
  const { register, errors, handleSubmit } = useForm();

  //NOTE: When the form is submitted it will gather the data from the form the user inputed...
  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log("data : ", data);
    props.chefRegister(data, props);
  };

  //NOTE: Invokes the styling defined in variable useStyle. [To Style this component ]
  const ChefSignUpStyle = ChefSignUpStyles();

  return (
    <React.Fragment>
      <div className={ChefSignUpStyle.mainWrapper}>
        <img className={ChefSignUpStyle.logo} src={logo} alt="Logo" />
        <Box component="div" className={ChefSignUpStyle.innerForm}>
          <Box className={ChefSignUpStyle.signUpIntro}>
            <h2>Welcome to Chef Portfolio!</h2>
            <p>
              It only takes a few minutes to start sharing your best recipes.
            </p>
            <Box className={ChefSignUpStyle.signUpIcons}>
              <img
                src="https://img.icons8.com/office/40/000000/cook-male--v1.png"
                alt="chef dashboard"
              />
              <p>Chef Dashboard: Have your very own dashboard!</p>
            </Box>
            <Box className={ChefSignUpStyle.signUpIcons}>
              <img
                src="https://img.icons8.com/color/40/000000/knowledge-sharing.png"
                alt="share recipes"
              />
              <p>Share your recipes: Let others see your creations!</p>
            </Box>
            <Box className={ChefSignUpStyle.signUpIcons}>
              <img
                src="https://img.icons8.com/cute-clipart/40/000000/one-free.png"
                alt="free!"
              />
              <p>100% Free: never have to pay a dime to use our website!</p>
            </Box>
          </Box>
          <Container maxWidth="xs" className={ChefSignUpStyle.mainContainer}>
            <CssBaseline />
            <Typography component="h1" variant="h5">
              Register as a Chef!
            </Typography>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={ChefSignUpStyle.form}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  {/* TextField holds both input and label --- [Ref is now used like inputRef && others change aswell] */}
                  <TextField
                    type="text"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    htmlFor="firstName"
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
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lname"
                    htmlFor="lastName"
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
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="uname"
                    htmlFor="username"
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
                  {/*NOTE: Responsible for displaying the errors */}
                  {errors.password && errors.password.message}
                </Grid>
              </Grid>
              <br></br>
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="You must be 18 years old to use our services!"
              />
              <Divider />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={ChefSignUpStyle.submit}
                type="submit"
              >
                Sign Up
              </Button>
            </form>
            <Grid container justify="flex-end">
              <Grid item>
                {/*NOTE: Now links to the login component [ Future addition: Will have a post request to chef dashboard when user signs up ] */}
                <Link
                  className={ChefSignUpStyle.links}
                  to="/login"
                  variant="body2"
                >
                  Already have an account?{" "}
                  <span className={ChefSignUpStyle.signIn}>Sign in</span>
                </Link>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  newUser: state.user
});

export default connect(mapStateToProps, { chefRegister })(ChefSignUpForm);
