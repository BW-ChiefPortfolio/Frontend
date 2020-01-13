// Created by Nathan Loveless modified by Nathan and Giovani on 12/19/19
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import RecipeList from "../components/RecipeList"

//NOTE: Material UI
import { CssBaseline, Container } from "@material-ui/core";
import LandingPageStyles from "../styles/_LandingPageStyles";

const ChefDashboard = props => {
  console.log('nl: ChefDashboard.js: ChefDashboard: UserData: ' , props)
  const LandingPageStyle = LandingPageStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" className={LandingPageStyle.headerContainer}>
        <h2 className={LandingPageStyle.subTitle}>Discover</h2>
      </Container>
      <Container maxWidth="lg">
        <div className={LandingPageStyle.innerContainer}>
          <div className="title">
            <h2>Chef Dashboard</h2>
          </div>
          <div className="filter">
            {/*Basic Select (DROPDOWNS) */}
            <Link to="/edit" className={LandingPageStyle.edit}>Edit</Link>
      <Link to="/create" className={LandingPageStyle.create}>Create</Link>
          </div>
        </div>
        <div className={LandingPageStyle.paperBG} elevation={5}>
          <Container
            maxWidth="lg"
            className={LandingPageStyle.recipesContainer}
          >
            <RecipeList />
          </Container>
        </div>
      </Container>
    </React.Fragment>
    //This is where the delete button will live!
    //<button>Delete</button>
  );
};

const mapStateToProps = state => ({
  user: state.user,
  recipes: state.chefRecipes
});

export default connect(mapStateToProps, { })(ChefDashboard);
