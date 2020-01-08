//NOTE: Material UI
import { makeStyles } from "@material-ui/core";

//NOTE: using Material UI
const LandingPageStyles = makeStyles({
  headerContainer: {
    padding: "5rem",
    backgroundColor: "gray",
    display: "flex",
    justifyContent: "center",
    color: "white",
    backgroundImage:
      "linear-gradient(rgba(27, 38, 44, 0.64), rgba(0, 0, 0, 0.5)), url(https://images.pexels.com/photos/277253/pexels-photo-277253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundPosition: "center"
  },
  recipesContainer: {
    backgroundColor: "white",
    boxShadow: "0 2px 4px 0 rgba(181,181,181,.7)",
    borderTop: "1px solid #f1f1f5",
    padding: "2rem",
    background: "white",
    height: "100vh",
    marginBottom: "3rem"
  },
  innerContainer: {
    display: "flex",
    padding: "0.5rem",
    alignItems: "center",
    justifyContent: "space-between"
  },
  subTitle: {
    textTransform: "uppercase"
  }
});

export default LandingPageStyles;
