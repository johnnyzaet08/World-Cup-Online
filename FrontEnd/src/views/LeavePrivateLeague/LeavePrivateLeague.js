//import React from "react";
import React, {useEffect, useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter";
import Button from '@mui/material/Button';
import axios from "axios";

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
};

const useStyles = makeStyles(styles);

export default function JoinPrivateLeague() {
    const classes = useStyles();

    const [tournamentID, setTournamentID] = useState();
    const [user, setUser] = useState("");
    
    useEffect(() => {
      setUser(sessionStorage.getItem("User"));
      setTournamentID(sessionStorage.getItem("TournamentID"));
    });
    const handleClick = async (event) => {
        event.preventDefault()
        const json = {
            "_idPrivateTournament":"",
            '_idTournament':"",
            '" Username "': "",
        };
        json.Username = user;
        json._idTournament = tournamentID;
        json._idPrivateTournament = "1";
        console.log(json);
        const headers = {
            "Access-Control-Allow-Origin": "*",
      
            "Access-Control-Allow-Headers":
              "Origin, X-Requested-With, Content-Type, Accept",
      
            "Content-Type": "application/json",
          };
          let validate="False"
          await axios
          .post("http://localhost:5000/LeavePrivateLeague", json, { headers })
          .then((response) => {
            if (response){
              validate="True"
            }})
          .catch((error) => console.error("There was an error!", error));
          console.log(validate)
          //Si ya esta en unido a un liga privada no puede crear una  
          if (validate=="True"){
            alert("No esta unido a ninguna liga privada");
            //history.push("/admin/viewtournament/createPrivateLeague");
          }
    };

    return (
    <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
            <Card>
            <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Leave Private League</h4>
                <p className={classes.cardCategoryWhite}>
                Are you sure you want to leave this private league ?
                </p>
            </CardHeader>
            <CardBody>
            <h4 color="black">If you leave this private link, all your data will be deleted.</h4>
            </CardBody>
            <CardFooter>
                <Button color="primary" onClick={handleClick}>Leave Private League</Button>
            </CardFooter>
            </Card>
        </GridItem>
    </GridContainer>
    );
}