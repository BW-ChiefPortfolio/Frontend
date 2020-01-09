import React, { useState } from 'react';
import axios from 'axios';

const RecipeDetails = (props) => {
    const [recipe, setRecipe] = useState({})
    setRecipe(props.recipe);
    console.log(props);
    
    return (
    <div>YHello!  I am recipe Details</div>
    )
  }
  
  export default RecipeDetails;

