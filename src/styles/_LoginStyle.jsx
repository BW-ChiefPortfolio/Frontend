//NOTE: Material UI
import { makeStyles } from "@material-ui/core";

//NOTE: A theme for this form using Material UI
const LoginStyles = makeStyles(theme => ({
  form: {
    width: "100%",
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  mainWrapper: {
    background: "#3DB1FF",
    display: "flex",
    alignItems: "center",
    marginBottom: "1rem",
    flexDirection: "column",
    height: "100vh"
  },
  mainContainer: {
    padding: "2rem",
    background: "white",
    marginTop: "1rem"
  },

  logo: {
    marginTop: "4.5rem",
  },
  innerForm: {
    display: "flex",
    justifyContent: "center",
    boxShadow: "0 2px 4px 0 rgba(181,181,181,.7)",
    borderTop: "1px solid #f1f1f5",
    padding: "2rem",
    background: "white",
    flexDirection: "row-reverse",
    marginBottom: "3rem"
  },
  signUpIntro: {
    marginLeft: "2rem"
  },
  signUpIcons: {
    display: "flex",
    alignItems: "center",
    marginTop: "1.5rem"
  },
  links: {
    textDecoration: "none",
    color: "#515050"
  },
  signUp: {
    color: "#3F51B5"
  },

  //This styles will be moved to another file later. EditPostStyles.js
  topText: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  select: {
    marginRight: "1rem",
  }
  
}));
export default LoginStyles;
