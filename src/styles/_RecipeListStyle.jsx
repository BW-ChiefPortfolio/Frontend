//NOTE: Material UI
import { makeStyles } from "@material-ui/core";

//NOTE: using Material UI
const RecipeListStyle = makeStyles({
    recipeCardContainer: {
        width: "350px",
        height: "350px",
        marginBottom: "1.5rem"
    },
    img: {
        width: "319px",

    },
    link: {
        textDecoration: "none",
        color: "black",
    }
});

export default RecipeListStyle;