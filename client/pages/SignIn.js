import React, { Component, useState, useContext } from 'react';
import { AppContext } from '../components/AppContext';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import MaterialLink from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import PetsIcon from '@material-ui/icons/Pets';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Styles from '../../styles.css';

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
    // color: secondary,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const [state, setState] = useContext(AppContext);

  // Saves state when on our main page
  const handleLogin = (e) => {
    e.preventDefault();
    setState({ ...state, isLoggedIn: true });
  };

  const handleInput = (e) => {
    setState({
      signUpFormText: {
        ...state.signUpFormText,
        [e.target.id]: e.target.value,
      },
    });
  };

  const handleClick = (e) => {
    // prevent POST
    e.preventDefault();
    // Send our state to the backend for signup
    console.log('handleClick -> state.signUpFormText', state.signUpFormText);
    axios
      .post('/api/userVerify', state.signUpFormText)
      .then((response) => {
        console.log('RESPONSE TO LOGIN REQUEST: ', response);
        setState({ ...state, isLoggedIn: true });
        // React router redirect needs to happen
        // once successful, set our signUpFormText to have empty values again
        // <Redirect to="/" />;
        const history = useHistory();
        history.push('/main');
      })
      .catch((err) => {
        alert(err);
      });
  };

  // OUR SIGNIN FOR WITH TEXT INPUT FIELDS
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PetsIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleInput}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleInput}
          />
          <Button
            className={classes.submit}
            fullWidth
            // component={Link}
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleClick}
          >
            Sign In
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleLogin}
          >
            Verify Login
          </Button>
          <Grid container>
            <Grid item xs>
              {/* forgot password route */}
              <MaterialLink href="#" variant="body2">
                Forgot password?
              </MaterialLink>
            </Grid>
            <Grid item>
              {/* OUR Signup Link */}
              <MaterialLink to="/signup" component={Link} variant="body2">
                {"Don't have an account? Sign Up"}
              </MaterialLink>
            </Grid>
          </Grid>
        </form>
      </div>
      {/* Copyright component */}
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
