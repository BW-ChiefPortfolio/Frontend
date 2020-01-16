import React  from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, Divider, Avatar } from "@material-ui/core";
import RecipeListStyles from "../styles/_RecipeListStyle";
import { connect } from "react-redux";

const RecipeList = props => {
  const RecipeListStyle = RecipeListStyles();

 let recipes = [];

 if(localStorage.getItem('token')) {
   recipes = props.filteredRecipes;
 }

 else {
   recipes = props.recipes;
 }

  return (
    <React.Fragment>
      {recipes.map(recipe => (
        <div className={""} key={recipe.id}>
          <Card className={RecipeListStyle.recipeCardContainer}>
            <CardContent>
              <Avatar alt="user_avatar" src={recipe.avatar_url} />
              <Link
                className={RecipeListStyle.link}
                to={`recipes-list/${recipe.id}`}
              >
                <h2>{recipe.title}</h2>
                <Divider />
                <br></br>
                <div className={""}>
                  <img
                    className={RecipeListStyle.img}                    
                    src={recipe.image}
                    alt={recipe.title}
                  />
                  <p className={RecipeListStyle.mealType}> {recipe.meal_type} </p>
                </div>
                <br></br>
                <Divider />
                <p>{recipe.description}</p>
              </Link>
            </CardContent>
          </Card>
        </div>
        //This breaks my code? Maybe I am adding it to the wrong place.
        // <Route exact path={`recipes-list/${recipe.title}`}  render={(props) => <RecipeDetails {...props} recipe={recipe} />} />
      ))}
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  recipes: state.recipes,
  ingredients: state.ingredients,
  filteredRecipes: state.filteredRecipes
});

export default connect(mapStateToProps, {})(RecipeList);
