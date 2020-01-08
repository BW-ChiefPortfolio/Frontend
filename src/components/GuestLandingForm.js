import React from "react";

//NOTE: Material UI
import { CssBaseline, Container, Paper } from "@material-ui/core";
import LandingPageStyles from "../styles/_LandingPageStyles";

const GuestLandingForm = () => {
  const LandingPageStyle = LandingPageStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" className={LandingPageStyle.headerContainer}>
        <h2 className={LandingPageStyle.subTitle}>
          Discover
        </h2>
      </Container>
      <Container maxWidth="lg">
        <div className={LandingPageStyle.innerContainer}>
          <div className="title">
            <h2>Recipes</h2>
          </div>
          <div className="filter">
            <p> Filter Goes Here </p>
          </div>
        </div>
        <Paper elevation={5}>
        <Container maxWidth="lg" className={LandingPageStyle.recipesContainer}>
          <p>This is where the recipes will be showcased! Cards!</p>
        </Container>
        </Paper>
      </Container>
    </React.Fragment>
  );
};

export default GuestLandingForm;
