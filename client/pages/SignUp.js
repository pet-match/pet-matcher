import React, { Component, useState, useContext } from 'react';
import { AppContext } from '../components/AppContext';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import MaterialLink from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import PetsIcon from '@material-ui/icons/Pets';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link, Redirect } from 'react-router-dom';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MaterialLink color="inherit" href="https://material-ui.com/">
        Pet-Match, LLC
      </MaterialLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    elevation: 3,
    marginTop: theme.spacing(9),
    display: 'flex',
    // aligns input fields vertically
    flexDirection: 'column',
    // centers our pawprint icon
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    // changes our icon color
    backgroundColor: theme.palette.success.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  // for styling
  const classes = useStyles();
  // for state management
  const [state, setState] = useContext(AppContext);
  // Dynamically add to our state based on input values entered into TextFields
  const handleInput = (e) => {
    setState({
      ...state,
      signUpFormText: {
        ...state.signUpFormText,
        [e.target.id]: e.target.value,
      },
    });
  };

  const clearTextFields = () => {
    // TARGET all of our input fields from our form
    const fNameInputField = document.getElementById('firstName');
    const lNameInputField = document.getElementById('lastName');
    const userName = document.getElementById('userName');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    // ASSIGN the values of our input fields to be empty
    fNameInputField.value = '';
    lNameInputField.value = '';
    userName.value = '';
    email.value = '';
    password.value = '';
    setState({
      ...state,
      signUpFormText: {
        userName: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      },
    });
  };

  const handleClick = (e) => {
    // prevent POST
    e.preventDefault();
    // Send our state to the backend for signup
    axios
      .post('/api/user', state.signUpFormText)
      .then((response) => {
        // If successful, clear signUpFormText
        clearTextFields();
        setState({ ...state, currentUserId: response.data.user_id });
      })
      .catch((err) => {
        clearTextFields();
        alert(err);
      });
  };

  //=====================================
  // SIGN UP FORM - NOT USED IN DEMO
  //=====================================
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PetsIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={handleInput}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={handleInput}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="userName"
                label="User Name"
                name="userName"
                autoComplete="uname"
                onChange={handleInput}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleInput}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleInput}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleClick}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <MaterialLink to="/signin" component={Link} variant="body2">
                {'Already have an account? Sign in'}
              </MaterialLink>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
