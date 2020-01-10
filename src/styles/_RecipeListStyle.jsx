//NOTE: Material UI
import { makeStyles } from "@material-ui/core";

//NOTE: using Material UI
const RecipeListStyle = makeStyles({
    recipeCardContainer: {
        width: "350px",
        marginBottom: "1.5rem"
    },
    img: {
        width: "319px",

    },
    link: {
        textDecoration: "none",
        color: "black",
    },
    mealType: {
        position: "absolute",
        marginTop: "-175px",
        padding: "10px",
        background: "#d5a170",
        textTransform: "uppercase",
        fontSize: "12px",
    }
});

export default RecipeListStyle;