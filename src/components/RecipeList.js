import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { Card, CardContent } from "@material-ui/core";
import RecipeListStyles from "../styles/_RecipeListStyle";
import { connect } from "react-redux";

const RecipeList = (props) => {
  console.log('NL: RecipeList: Recipe data: ', props.recipes);

  const RecipeListStyle = RecipeListStyles();

    return (
        <React.Fragment>
        {props.recipes.map(recipe => (
        <Card className={RecipeListStyle.recipeCardContainer}>
        <CardContent>
        <Link className={RecipeListStyle.link}to={`recipes-list/${recipe.title}`}>
        <div className={""} key={recipe.title}>
        <h2>{recipe.title}</h2>
          <img
            className={RecipeListStyle.img}
            src= "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt={recipe.title}
          />
          <p>{recipe.meal_type}</p>
        </div>
      </Link>
      </CardContent>
        </Card>
        ))}
        </React.Fragment>
    )
}

const mapStateToProps = state => ({ 
  recipes: state.recipes
});

export default connect(mapStateToProps, { })(RecipeList);