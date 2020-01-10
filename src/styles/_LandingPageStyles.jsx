//NOTE: Material UI
import { makeStyles } from "@material-ui/core";

//NOTE: using Material UI
const LandingPageStyles = makeStyles({
  headerContainer: {
    backgroundColor: "gray",
    display: "flex",
    justifyContent: "center",
    color: "white",
    backgroundImage:
      "linear-gradient(rgba(27, 38, 44, 0.64), rgba(0, 0, 0, 0.5)), url(https://images.pexels.com/photos/277253/pexels-photo-277253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
    backgroundAttachment: "fixed",
    backgroundPosition: "center"
  },
  recipesContainer: {
    padding: "2rem",
    marginBottom: "3rem",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  innerContainer: {
    display: "flex",
    padding: "0.5rem",
    alignItems: "center",
    justifyContent: "space-between"
  },
  paperBG: {
    backgroundColor: "#f4f4f4",
  },
  subTitle: {
    textTransform: "uppercase",
    fontSize: "3rem",
  }
});

export default LandingPageStyles;
