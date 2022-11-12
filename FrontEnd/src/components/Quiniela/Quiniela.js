import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader";
import {  Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
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

export default function Quiniela(props) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  const { matchID, teamA, teamB, playersA, playersB } = props;

  const all = playersA.concat(playersB);

  const radioOptions = [
    {
      value: teamA,
      label: teamA,
    },
    {
      value: teamB,
      label: teamB,
    },
    {
      value: "Tie",
      label: "Tie",
    },
  ]

  const [winner, setWinner] = React.useState(null);  
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
    const json = {
      matchID: matchID,
      winner: winner,
      teamAScore: teamAScore,
      teamBScore: teamBScore,
      goalA: sessionStorage.getItem("goalA"),
      goalB: sessionStorage.getItem("goalB"),
      assistA: sessionStorage.getItem("assistA"),
      assistB: sessionStorage.getItem("assistB"),
      MVP: sessionStorage.getItem("MVP"),
    }
    console.log("Aqui puede ir lo de axios");
    console.log(json);
  };
  
  const handleWinnerChange = (event) => {
    setWinner(event.target.value);
  };

  return (
  <GridContainer>
    <GridItem xs={10} sm={6} md={6}>
      <Card>
        <CardHeader color="primary">
          <Row>
            <Col>
            <h3>{teamA}</h3>
            </Col>
            <Col>
            <h3>{teamB}</h3>
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
            value={winner}
            onChange={(winner) => handleWinnerChange(winner)}
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
              team={playersA}
              number={teamAScore}
              idText="goalA"
            />
          </Col>
          <Col sm={4}>
          <DynamicSelect
              team={playersB}
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
              team={playersA}
              idText="assistA"
              number={teamAScore}
            />
          </Col>
          <Col sm={4}>
            <DynamicSelect
              team={playersB}
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
          Predict
        </Button>
      </Card>
    </GridItem>
  </GridContainer>
  );
}

Quiniela.propTypes = {
  matchID: PropTypes.number,
  teamA: PropTypes.string,
  teamB: PropTypes.string,
  playersA: PropTypes.array,
  playersB: PropTypes.array,
};