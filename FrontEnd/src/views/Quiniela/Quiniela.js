import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader";
import {  Row, Col} from "react-bootstrap";
import ControlledRadioButtonsGroup from "components/Radio-group/radio-group.js";
import Button from "components/CustomButtons/Button.js";
import DynamicSelect from "components/DynamicSelect/DynamicSelect";

const styles = {
  black: {
    color: '#000',
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: 'Arial',
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
const teamB = ["Messi", "Ronaldo", "Navas"];
const teamA = ["Sergio", "Iker", "Benzema"];
//const [playerData, setPlayerData] = useState([{ player: "" }]);

const all = teamA.concat(teamB);

export default function Quiniela() {
  const classes = useStyles();
  const radioOptions = [
    {
      value: "Winner",
      label: "Winner España",
    },
    {
      value: "Loser",
      label: "Loser España",
    },
    {
      value: "Tie",
      label: "Tie",
    },
  ]  
  const [tournamentType, setTournamentType] = React.useState("Local");  
  const [teamBScore, seteamBScore] = useState(0);
  const [teamAScore, seteamAScore] = useState(0);

  const handleTeamBChange = (event) => {
    if (parseInt( event.target.value)>=0){
      seteamBScore(parseInt( event.target.value))
    }
  };

  const handleTeamAChange = (event) => {
    if (parseInt( event.target.value)>=0){
      seteamAScore(parseInt( event.target.value))
    }
  };

  const handleTest = () => {
    console.log(4)
  };
  
  const handleTournamentTypeChange = (event) => {
    let temp = event.target.value;
    setTournamentType(temp);
  };

  return (
  <GridContainer>
    <GridItem xs={10} sm={6} md={6}>
      <Card>
        <CardHeader color="primary">
          <Row>
            <Col>
            <h3>España</h3>
            </Col>
            <Col>
            <h3>Costa Rica</h3>
            </Col>
          </Row>
        </CardHeader>
        <br></br>
        <h4 className={classes.black}>Predict who will win</h4>
        <Row>
          <Col sm={2}></Col>
          <Col sm={10}>
            <ControlledRadioButtonsGroup 
            options={radioOptions}
            row={true}
            value={tournamentType}
            onChange={(type) => handleTournamentTypeChange(type)}
            formControlProps={{
              fullWidth: true,
            }}
            />
          </Col>
        </Row>
        <br></br>
        <h4 className={classes.black}>Predict the final score</h4>
        <Row>
          <Col sm={2}></Col>
          <Col sm={4}>
            <CustomInput
            type="number"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              onChange: (event) => handleTeamAChange(event),
            }}
            />
          </Col>
          <Col sm={4}>
            <CustomInput
            type="number"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              onChange: (event) => handleTeamBChange(event),
            }}
            />
          </Col>
        </Row>
        <br></br>
        <h4 className={classes.black}>Predict goals scored per player</h4>
        <Row>
          <Col sm={2}></Col>
          <Col sm={4}>
            <DynamicSelect
            team={teamA}
            number={teamAScore}
            idText="goalA"
            />
          </Col>
          <Col sm={4}>
          <DynamicSelect
            team={teamB}
            idText="goalB"
            number={teamBScore}
            />
          </Col>
        </Row>
        <br></br>
        <h4 className={classes.black}>Predict the assists of a goal for each player</h4>
        <Row>
          <Col sm={2}></Col>
          <Col sm={4}>
            <DynamicSelect
            team={teamA}
            idText="assistA"
            number={teamAScore}
            />
          </Col>
          <Col sm={4}>
            <DynamicSelect
            team={teamB}
            number={teamBScore}
            idText="assistB"
            />
          </Col>
        </Row>
        <br></br>
        <h4 className={classes.black}>Predict the MVP of the game</h4>
        <Row>
          <Col sm={4}></Col>
          <Col sm={4}>
            <DynamicSelect
            team={all}
            number={1}
            idText="MVP"
            />
          </Col>
        </Row>
        <Button color="primary" onClick={handleTest}>
          Test
        </Button>
      </Card>
    </GridItem>
  </GridContainer>
  );
}
