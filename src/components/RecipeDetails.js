import React, { useState } from 'react';
import axios from 'axios';
import { CssBaseline } from '@material-ui/core';

const RecipeDetails = (props) => {
    // const [recipe, setRecipe] = useState({})
    // setRecipe(props.recipe);
    console.log("hi",props);
    
    return (
      <React.Fragment>
      <CssBaseline/>
    <h2>Hello!  I am recipe Details</h2>
    </React.Fragment>
    )
  }
  
  export default RecipeDetails;

