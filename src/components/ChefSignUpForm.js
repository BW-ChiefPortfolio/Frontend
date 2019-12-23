// WIP --- something to start
// I am experimenting with react hook form to create the sign up form... You must install it using yarn add react-hook-form....
// Using Material UI to Style this form! [do not delete]

//If you have any question on how to use this form or add more features let me know. It is easy for things to break...

//other
import React from 'react';
import useForm from 'react-hook-form';
import { Link } from 'react-router-dom'


//Material UI 
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Divider } from '@material-ui/core';

//a theme for this form using Material UI 
const useStyles = makeStyles(theme => ({

  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

//This is a simpler way to create forms with validation. It renders less when a user inputs into the form...
const ChefSignUpForm = () => {
  const { register, errors, handleSubmit } = useForm();
  //when the form is submitted it will gather the data from the form the user inputed...
  const onSubmit = data => {
    console.log('data : ', data);
    //submit the form and get an alert on what the user inputed... Remember [data] is what the user inputed.
    alert(`Fname: ---> ${data.firstName}       lName ---> ${data.lastName}       uName ---> ${data.username}      email---> ${data.email}      password---> ${data.password}`)

  };

  //invokes the styling defined in variable useStyle.
  const classes = useStyles();

  return (
    <Container component='main' maxWidth='xs' style={{boxSizing:'border-box', boxShadow: '0 2px 4px 0 rgba(181,181,181,.7)', borderTop:'1px solid #f1f1f5', padding: '2rem' }}>
      <CssBaseline />
      <Typography component='h1' variant='h5'>
        Register as a Chef!
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {/* TextField holds both input and label --- [Ref is now used like inputRef && others change aswell] */}
            <TextField
              type='text'
              name='firstName'
              variant='outlined'
              required
              fullWidth
              id='firstName'
              label='First Name'
              autoFocus
              htmlFor='firstName'
              inputRef={register}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              type='text'
              variant='outlined'
              required
              fullWidth
              id='lastName'
              label='Last Name'
              name='lastName'
              autoComplete='lname'
              htmlFor='lastName'
              inputRef={register}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              type='text'
              variant='outlined'
              required
              fullWidth
              id='username'
              label='Username'
              name='username'
              autoComplete='uname'
              htmlFor='username'
              inputRef={register}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              type='text'
              variant='outlined'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              htmlFor='email'
              inputRef={register({
                required: 'You must provide an Email',
                pattern: {
                  value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: 'Please provide a valid Email!',
                },
              })}
            />
            {/*Responsible for displaying the errors*/}
            {errors.email && errors.email.message}
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              type='password'
              variant='outlined'
              required
              fullWidth
              name='password'
              label='Password'
              id='password'
              autoComplete='current-password'
              htmlFor='password'
              inputRef={register({
                minLength: {
                  value: 6,
                  message: 'Minimum Length is 6',
                },
              })}
            />
            {/*Responsible for displaying the errors ----  Also, looking for patterns to add to the password to make it more secure [/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/] example for*/}
            {errors.password && errors.password.message}
          </Grid>
        </Grid>
        <br></br>
        <FormControlLabel
          control={<Checkbox color='primary' />}
          label='You must be 18 years old to use our services!'
        />  
        <Divider />

        <Button
          fullWidth
          variant='contained'
          color='primary'
          className={classes.submit}
          type='submit'>Sign Up</Button>
      </form>
      <Grid container justify='flex-end'>
        <Grid item>
          {/* now links to the login component [ Future addition: Will have a post request to chef dashboard when user signs up ] */}
          <Link to='/login' variant='body2'>
            Already have an account? Sign in
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ChefSignUpForm;