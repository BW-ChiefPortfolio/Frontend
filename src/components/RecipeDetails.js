import React, { useState, useEffect } from 'react';
import { CssBaseline } from "@material-ui/core";
import { connect } from 'react-redux';

const RecipeDetails = (props) => {
  const [recipe, setRecipe] = useState({});
  const [ingredients, setIngredients] = useState([])
  const id = props.match.params.id;

  const divStyle = { padding: '10px 10px 0px 0px'};

useEffect(() => {


  let recipes = [];

  if(localStorage.getItem('token')) {
    recipes = props.filteredRecipes;
  } 
  else {
    recipes = props.recipes;
  }

  const newRecipe = recipes.filter(item => {
    if(id === item.id)
      return true;
    return false;
  })

    const newIngredients = props.ingredients.filter(item => {
      if(id === item.recipe_id)
        return true;
      return false;
    })

    setRecipe(newRecipe[0]);
    setIngredients(newIngredients);
  }, [props.ingredients, props.filteredRecipes, props.recipes, id])
    
    return (
      <React.Fragment>
      <CssBaseline/>
    <h2>{recipe.title}</h2>
    <img src={recipe.image} alt='Food details'/>
    <h3>Recipe Description</h3>
    <p>{recipe.description}</p>
    <h3>Recipe Instructions</h3>
    <p>{recipe.instructions}</p>
    <h3>Meal Type</h3>
    <p>{recipe.mealType}</p>
    <h3>Ingredients</h3>
    {ingredients.map(ingredient => (
      <>
      <div>
      <span style={divStyle}>{ingredient.quantity}</span>
      <span style={divStyle}>{ingredient.measurement}</span>
      <span style={divStyle}>{ingredient.ingredient}</span>
      <span style={divStyle}>{ingredient.notes}</span>
      </div>
      </>
    ))}

    </React.Fragment>
    )
  }
  
  const mapStateToProps = state => ({
    recipes: state.recipes,
    ingredients: state.ingredients,
    filteredRecipes: state.filteredRecipes
  });
  
  export default connect(mapStateToProps, {})(RecipeDetails);

