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
  const [Cdate, handleDateChange] = useState(new Date().toDateString());
  const [Ctime, handleTimeChange] = useState(new Date().toTimeString());
  const [tournament, setTournament] = useState("Default");
  const [tournamentPhase, setTournamentPhase] = useState("Default");
  const [firstTeam, setFirstTeam] = useState("Default");
  const [secondTeam, setSecondTeam] = useState("Default");

  const handleChange = (event) => {
    setCampus(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();

    console.log("Date:", Cdate);
    console.log("Time:", Ctime);
    console.log("tournament:", tournament);
    console.log("tournamentPhase:", tournament);
    console.log("FirstTeam:", tournament);
    console.log("SecondTeam:", tournament);
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

    json.Fecha = Cdate;
    json.Hora = Ctime;
    json.Torneo = tournament;
    json.Fase = tournamentPhase;
    json.Equipo1 = firstTeam;
    json.Equipo2 = secondTeam;
    json.Sede = campus;
  };

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={14}>
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
                    value={Cdate}
                    handleDateChange={(date) =>
                      handleDateChange(date.toDateString())
                    }
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <BasicTimePicker
                    labelText="Time Match"
                    id="time-match"
                    value={Ctime}
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      onChange: (time) => handleTimeChange(time.toDateString()),
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <BasicSelect
                    labelText="Tournament Select"
                    id="TournamentID"
                    value={tournament}
                    formControlProps={{
                      fullWidth: true,
                    }}
                    onOptionSelect={(newValue) => {
                      console.log("Detected Tournament");
                      setTournament(newValue);
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <BasicSelect
                    labelText="Select tournament phase"
                    id="last-name"
                    value={tournamentPhase}
                    formControlProps={{
                      fullWidth: true,
                    }}
                    onOptionSelect={(newValue) => {
                      console.log("Detected Tournament Phase");
                      setTournamentPhase(newValue);
                    }}
                  />
                </GridItem>
              </GridContainer>
              <br></br>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <BasicSelect
                    labelText="First Team"
                    id="city"
                    value={firstTeam}
                    formControlProps={{
                      fullWidth: true,
                    }}
                    onOptionSelect={(newValue) => {
                      console.log("Detected First Team");
                      setFirstTeam(newValue);
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <BasicSelect
                    labelText="Second Team"
                    id="country"
                    value={secondTeam}
                    formControlProps={{
                      fullWidth: true,
                    }}
                    onOptionSelect={(newValue) => {
                      console.log("Detected Second Team");
                      setSecondTeam(newValue);
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    labelText="Select campus"
                    id="postal-code"
                    value={campus}
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
