import React from "react";
import RecipeList from "../components/RecipeList"
import { connect } from "react-redux";

//NOTE: Material UI
import { CssBaseline, Container, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import LandingPageStyles from "../styles/_LandingPageStyles";

const GuestLandingForm = (props) => {

  console.log('NL: GuestLandingForm.js: GuestLandingForm: ', props);

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
            <h2>Recipes</h2>
          </div>
          <div className="filter">
            Filter
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
  );
};

// By: <Chef>         <By Chef Name>
//     <Meal Type>    <Types of Meals>
//     <Ingredient>   <All ingredients>
//     <Recipe Name>  <A-Z, Z-A>

const mapStateToProps = state => ({
  recipeNames: state.recipeNames,
  mealTypes: state.mealTypes,
  recipes: state.recipes,
  chefs: state.chefNames,
  ingredients: state.ingredients,
  measurements: state.measurements
 });

export default connect(mapStateToProps, {})(GuestLandingForm);
