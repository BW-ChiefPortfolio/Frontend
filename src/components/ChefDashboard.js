// Created by Nathan Loveless modified by Nathan and Giovani on 12/19/19
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";

const ChefDashboard = props => {
  console.log('nl: ChefDashboard.js: ChefDashboard: UserData: ' , props)
  return (
    <React.Fragment>
      <CssBaseline />
      <div>This will be the chef dashboard!</div>
      <Link to="/edit">Edit</Link>
      <Link to="/create">Create</Link>
    </React.Fragment>
    //This is where the delete button will live!
    //<button>Delete</button>
  );
};

const mapStateToProps = state => ({
  user: state.user,
  recipes: state.recipes
});

export default connect(mapStateToProps, {})(ChefDashboard);
