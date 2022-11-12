import React, { useEffect, useState } from "react";
import axios from "axios";
// @material-ui/core components
import Quiniela from "components/Quiniela/Quiniela.js";

export default function viewMatches() {
  const tournamentID = sessionStorage.getItem("TournamentID");
  
  console.log("Se captura todo lo del tournament: ", tournamentID);
  
  const [matches, setMatches] = useState([]);

  // *************************************************************
  // *********************** GET DATA ****************************
  const callMatchs = async () => {
    await axios.get('http://localhost:5000/getMatchs/'+tournamentID)
                .then(response => {
                  setMatches(response.data)
                })
                .catch(error => {
                  console.error('There was an error!', error);
                });
    }
    useEffect(async () => {
      await callMatchs();
    }, []);

  
  
  return (
    <div>
      {
        matches.map((data, i) => {
          return(
            <Quiniela
              key={i}
              matchID = {data.MatchID}
              teamA = {data.TeamA}
              teamB = {data.TeamB}
              playersA = {data.PlayersA}
              playersB = {data.PlayersB}
            />
          )
        })
      }
    </div>
  );
}