import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
//import { Switch, Route } from "react-router-dom";
//import routes from "routes.js";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import { container } from "assets/jss/material-dashboard-react.js";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
  content: {
    marginTop: "20px",
    padding: "30px 15px",
    minHeight: "calc(100vh - 123px)",
  },
  container,
  map: {
    marginTop: "20px",
  },
};

/*const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
      return null;
    })}
  </Switch>
);*/

const useStyles = makeStyles(styles);

export default function ViewTournament() {
  const classes = useStyles();
  const history = useHistory();
  let ID = history.location.tournamentID;
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Tournament ID: {ID}</h4>
            <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p>
          </CardHeader>
          <CardFooter>
            <p className={classes.cardCategoryWhite}>
              Hola muchachones
            </p>
          </CardFooter>
        </Card>
      </GridItem>

    </GridContainer>
  );
}