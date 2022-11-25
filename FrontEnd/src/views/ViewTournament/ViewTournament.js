import React, {useEffect, useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Switch, Route, Redirect } from "react-router-dom";
// core components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import SimpleNavbar from "components/Navbars/SimpleNavbar.js";
import routes from "routesTournament.js";
import styles from "assets/jss/material-dashboard-react/views/viewtournamentStyle.js";

const useStyles = makeStyles(styles);

export default function ViewTournament() {
  const classes = useStyles();
  const [tournamentID, setTournamentID] = useState();

  //Aqui se necesita un axios para capturar el ID de la liga del torneo y del usuario

  useEffect(() => {
    setTournamentID(sessionStorage.getItem("TournamentID"));
    sessionStorage.setItem("PrivateLeagueCode", "1D") //Dato capturado porfa
  });

  return (
    <div className={classes.mainPanel}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Tournament ID: {tournamentID}</h4>
          </CardHeader>
          <CardFooter>
            <SimpleNavbar
              routes={routes}
            />
          </CardFooter>
        </Card>
        <div className={classes.content}>
          <Card>
            <Switch>
              {routes.map((prop, key) => {
                if (prop.layout === "/admin/viewtournament") {
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
            <Redirect from="/admin/viewtournament" to="/admin/viewtournament/viewmatches"/>
          </Card>
        </div>
    </div>
  );
}
