import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import PrivateRoute from './components/PrivateRoute';
import reducer from './reducers/reducers';
import LoginForm from './components/LoginForm';
import ChefDashboard from './components/ChefDashboard';
import ChefSignUpForm from './components/ChefSignUpForm';

const store = createStore(reducer, applyMiddleware(thunk));


function App() {
  return (
      <Router>
        <div className="App">
        <Route exact path='/' component={LoginForm} />
        <PrivateRoute exact path='/chefdashboard' component={ChefDashboard} />
        {/* testing if the form is working... */}
        <Route path ='/' component={ChefSignUpForm}/>
        </div>
    </Router>
  );
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
