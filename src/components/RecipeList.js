import React  from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, Divider, Avatar } from "@material-ui/core";
import RecipeListStyles from "../styles/_RecipeListStyle";
import { connect } from "react-redux";

const RecipeList = props => {
  const RecipeListStyle = RecipeListStyles();

  return (
    <React.Fragment>
      {props.recipes.map(recipe => (
        //Since id wasn't formatted in the server correctly it wont display correctly. Will need to use title, but my TL said that may not work.
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
                    src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
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
  recipes: state.chefRecipes
});

export default connect(mapStateToProps, {})(RecipeList);
