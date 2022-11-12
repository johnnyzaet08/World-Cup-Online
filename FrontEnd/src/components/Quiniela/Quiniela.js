import React, { useState, useEffect } from "react";
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
import axios from "axios";

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
  const [pools, setPools] = useState([]);
  const [goalPools, setGoalPools] = useState([]);
  const [assistPools, setAssistPools] = useState([]);

  const separator = (toSeparate) =>{
    let separated = [];
    let temp = "";
    for(let i=0;i<toSeparate.length;i++){
      temp += toSeparate[i];
      if(i%2!=0){
        separated.push(temp);
        temp="";
      }
    }
    return separated;
  }

  // *************************************************************
  // *********************** GET DATA ****************************

  const callPools = async () => {
    await axios.get('http://localhost:5000/getPools')
                .then(response => {
                  setPools(response.data.Pools);
                  console.log("POOLS:",response.data);
                })
                .catch(error => {
                  console.error('There was an error!', error);
                });
    }
  useEffect(async () => {
    await callPools();
  }, []); 

  const callGoalsPools = async () => {
    await axios.get('http://localhost:5000/getGoalPools')
                .then(response => {
                  setGoalPools(response.data.GoalsPools);
                  console.log("GOAL POOLS:",response.data);
                })
                .catch(error => {
                  console.error('There was an error!', error);
                });
    }
    useEffect(async () => {
      await callGoalsPools();
    }, []); 

  const callAssistPools = async () => {
    await axios.get('http://localhost:5000/getAssistPools')
                .then(response => {
                  setAssistPools(response.data.AssistPools)
                  console.log("ASSIST POOLS:",response.data);
                })
                .catch(error => {
                  console.error('There was an error!', error);
                });
    }
    useEffect(async () => {
      await callAssistPools();
    }, []); 


  // *************************************************************
  // ******************** HANDLE EVENTS **************************

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

  const handleTest = async (event) => {
    event.preventDefault();

    let scorersA = sessionStorage.getItem("goalA").split(',');
    let scorersB = sessionStorage.getItem("goalB").split(',');

    const scorersAFinal = separator(scorersA);
    const scorersBFinal = separator(scorersB);

    console.log("GOALS PLAYERS A:", scorersAFinal);
    console.log("GOALS PLAYERS B:", scorersBFinal);

    let assistersA = sessionStorage.getItem("assistA").split(',');
    let assistersB = sessionStorage.getItem("assistB").split(',');

    const assistersAFinal = separator(assistersA);
    const assistersBFinal = separator(assistersB);

    console.log("ASSIST PLAYERS A:", assistersAFinal);
    console.log("ASSIST PLAYERS B:", assistersBFinal);

    const mvpFinal = separator(sessionStorage.getItem("MVP").split(','));

    let _idGoalsPlayer = [];
    let _idAssistPlayer = [];
    for(let i=0;i<(teamAScore+teamBScore);i++){
      _idGoalsPlayer[i]=i+goalPools.length+1;
    }
    for(let i=0;i<(teamAScore+teamBScore);i++){
      _idAssistPlayer[i]=i+assistPools.length+1;
    }

    const json = {
      _id: (pools.length+1),
      matchID: matchID,
      winner: winner,
      teamAScore: teamAScore,
      teamBScore: teamBScore,
      _idGoalsPlayer: _idGoalsPlayer,
      goalA: scorersAFinal,
      goalB: scorersBFinal,
      _idAssistPlayer: _idAssistPlayer,
      assistA: assistersAFinal,
      assistB: assistersBFinal,
      MVP: mvpFinal
    }
    console.log(json)
    
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
      'Content-Type': 'application/json'
    }
    
    await axios.post('http://localhost:5000/createPools', json, { headers })
    .then(response => console.log(response))
    .catch(error => console.error('There was an error!', error));

    await callPools();
    await callAssistPools();
    await callGoalsPools();
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
