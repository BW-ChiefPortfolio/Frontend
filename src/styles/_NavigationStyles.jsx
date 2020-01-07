//NOTE: Material UI
import { makeStyles } from "@material-ui/core";

//NOTE: using Material UI
const NavigationStyles = makeStyles ({
    navContainer: {
        padding: "0.5rem",
        backgroundColor: "#1b262c",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    link: {
        color: "white",
        textDecoration: "none",
        marginRight: "1.5rem",
        borderBottom: "2px #3DB1FF solid",
        padding: "9px",
        "&:hover": {
            color: "#3DB1FF",
        }
    },
    logo: {

    },
    linkContainer: {

    }
  });

  export default NavigationStyles;