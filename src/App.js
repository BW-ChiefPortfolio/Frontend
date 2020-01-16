import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import LoginForm from "./components/LoginForm";
import ChefDashboard from "./components/ChefDashboard";
import ChefSignUpForm from "./components/ChefSignUpForm";
import GuestLandingForm from "./components/GuestLandingForm";
//import { userData, recipes } from './server'; /*** Test import only ***/
import Navigation from "./components/Navigation";
import CreatePost from "./components/CreatePost";
import EditPost from "./components/EditPost";
import RecipeDetails from './components/RecipeDetails';
import { connect } from "react-redux";
import { fetchRecipes, chefFetchData, initLocalData } from "./actions/actions";

import RecipeList from "./components/RecipeList";

function App(props) {
    props.initLocalData();
  
    return (
      <Router>
        <div className="App">
          {/* Update 01.07.20 -- Moved <Link/> to the navigation component. */}
          <Navigation />
          <Route exact path="/" component={GuestLandingForm} />
          <Route path="/chefsignup" component={ChefSignUpForm} />
          <Route path="/login" component={LoginForm} />
  
          {/* Maybe make it a PrivateRoute????*/}
          <Route path="/create" component={CreatePost} />
          <Route path="/edit" component={EditPost} />
          <Route exact path="/recipes-list" component={RecipeList} />
        <Route path="/recipes-list/:id" component={RecipeDetails} />
  
          <PrivateRoute exact path="/chefdashboard" component={ChefDashboard} />
        </div>
      </Router>
    );
  }

  const mapStateToProps = state => ({
    recipeIndex: state.user.recipes
  });

export default connect(mapStateToProps, { fetchRecipes, chefFetchData, initLocalData })(App);