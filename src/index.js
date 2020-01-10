import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import PrivateRoute from "./components/PrivateRoute";
import reducer from "./reducers/reducers";
import LoginForm from "./components/LoginForm";
import ChefDashboard from "./components/ChefDashboard";
import ChefSignUpForm from "./components/ChefSignUpForm";
import GuestLandingForm from "./components/GuestLandingForm";
//import { userData, recipes } from './server'; /*** Test import only ***/
import Navigation from "./components/Navigation";
import CreatePost from "./components/CreatePost";
import EditPost from "./components/EditPost";

import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  //*** TEST CODE ONLY ***/
  //const [user, setUser] = useState(userData);
  //const [recipesArray, setRecipesArray] = useState(recipes)
  //console.log('nl: index.js: App: userData: ', userData);
  //console.log('nl: index.js: App: recipes: ', recipesArray);
  //*** END OF TEST CODE ***/

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
        {/* Added the render here for details to work...*/}
        <Route path="/recipes-list/:id" render={props=> (<RecipeDetails {...props}/>)} /> 

        <PrivateRoute exact path="/chefdashboard" component={ChefDashboard} />
      </div>
    </Router>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
