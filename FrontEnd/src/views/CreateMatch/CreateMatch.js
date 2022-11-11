import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import BasicDatePicker from "components/DatePicker/DatePicker.js";
import BasicTimePicker from "components/TimePicker/TimePicker";
import BasicSelect from "components/Select/Select";
import axios from "axios";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};

const useStyles = makeStyles(styles);

export default function CreateMatch() {
  const classes = useStyles();

  const [campus, setCampus] = useState("");
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [tournament, setTournament] = useState("");
  const [phase, setPhase] = useState("");
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");

  const options1 = [
    {
      value: "x",
      text: "x",
    },
    {
      value: "y",
      text: "y",
    },
  ]
  const options2 = [
    {
      value: "t",
      text: "t",
    },
    {
      value: "z",
      text: "z",
    },
  ]

  const handleChange = (event) => {
    setCampus(event.target.value);
  };

  const handleTimeChange = (newTime) => {
    setTime(newTime);
  };

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleTournamentChange = (newTournament) => {
    setTournament(newTournament.target.value);
  };

  const handlePhaseChange = (newPhase) => {
    setPhase(newPhase.target.value);
  };

  const handleFirstChange = (newFirst) => {
    setFirst(newFirst.target.value);
  };

  const handleSecondChange = (newSecond) => {
    setSecond(newSecond.target.value);
  };

  const handleClick = async (event) => {
    event.preventDefault();

    //const date =  document.getElementById("date-match").value;
    //const time = document.getElementById("time-match").value;
    const tournament = document.getElementById("tournamentID").innerHTML;

    const tournamentPhase = document.getElementById("tournament-phase")
      .innerHTML;

    const firstTeam = document.getElementById("first-team").innerHTML;
    const secondTeam = document.getElementById("second-team").innerHTML;

    const timeMatch = document.getElementById("time-match");

    console.log(timeMatch);
    console.log("Date:", new Date(date).toLocaleDateString());
    console.log("Time:", new Date(time).toLocaleTimeString());
    console.log("tournament:", tournament);
    console.log("tournamentPhase:", tournamentPhase);
    console.log("FirstTeam:", firstTeam);
    console.log("SecondTeam:", secondTeam);
    console.log("Campus:", campus);

    const json = {
      '" Fecha "': "",
      '" Hora "': "",
      '" Torneo "': "",
      '" Fase "': "",
      '" Equipo1 "': "",
      '" Equipo2 "': "",
      '" Sede "': "",
    };

    json.Fecha = new Date(date).toLocaleDateString();
    json.Hora = new Date(time).toLocaleTimeString();
    json.Torneo = tournament;
    json.Fase = tournamentPhase;
    json.Equipo1 = firstTeam;
    json.Equipo2 = secondTeam;
    json.Sede = campus;

    console.log(json);

    const headers = {
      "Access-Control-Allow-Origin": "*",

      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",

      "Content-Type": "application/json",
    };

    await axios
      .post("http://localhost:5000/createPartidos", json, { headers })
      .then((response) => console.log(response))
      .catch((error) => console.error("There was an error!", error));
  };

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Create Match</h4>
              <p className={classes.cardCategoryWhite}>
                Complete all the information for this new match
              </p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <BasicDatePicker
                    labelText="Date Match"
                    id="date-match"
                    value={date}
                    onChange={(newDate) => handleDateChange(newDate)}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <BasicTimePicker
                    labelText="Time Match"
                    id="time-match"
                    value={time}
                    onChange={(newTime) => handleTimeChange(newTime)}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <BasicSelect
                    labelText="Tournament Select"
                    id="tournamentID"
                    options={options1}
                    value={tournament}
                    onChange={(newTournament) => handleTournamentChange(newTournament)}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <BasicSelect
                    labelText="Select tournament phase"
                    id="tournament-phase"
                    options={options2}
                    value={phase}
                    onChange={(newPhase) => handlePhaseChange(newPhase)}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <br></br>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <BasicSelect
                    labelText="First Team"
                    id="first-team"
                    options={options1}
                    value={first}
                    onChange={(newFirst) => handleFirstChange(newFirst)}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <BasicSelect
                    labelText="Second Team"
                    id="second-team"
                    options={options2}
                    value={second}
                    onChange={(newSecond) => handleSecondChange(newSecond)}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    labelText="Select campus"
                    id="campusId"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      onChange: (event) => handleChange(event),
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="primary" onClick={handleClick}>
                Create Match
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
