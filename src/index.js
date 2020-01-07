import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import PrivateRoute from './components/PrivateRoute';
import reducer from './reducers/reducers';
import LoginForm from './components/LoginForm';
import ChefDashboard from './components/ChefDashboard';
import ChefSignUpForm from './components/ChefSignUpForm';
import GuestLandingForm from './components/GuestLandingForm';
//import { userData, recipes } from './server'; /*** Test import only ***/


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
        {/* Update 12/21/19 -- Seperated the chef sign up page && Login Form to their own paths && Added <Links></Links> for each one of them... */}
        <Link to='/'> Home </Link>
        <Link to='/login'> Login </Link>
        <Link to='/chefsignup'> Chef Sign up </Link>
        <Route exact path='/' component={ GuestLandingForm } />
        <Route path='/chefsignup' component={ChefSignUpForm} />
        <Route path='/login' component={LoginForm} />
        <PrivateRoute exact path='/chefdashboard' component={ChefDashboard} />
      </div>
    </Router>
  );
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
