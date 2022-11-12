import React from "react";
// @material-ui/core components
import Quiniela from "components/Quiniela/Quiniela.js";

export default function viewMatches() {
  const tournamentID = sessionStorage.getItem("TournamentID");
  
  console.log("Se captura todo lo del tournament: ", tournamentID);
  
  const matches = [
    {
      MatchID: 1,
      TeamA: "Costa Rica",
      TeamB: "España",
      PlayersA: ["Messi", "Ronaldo", "Navas"],
      PlayersB: ["Sergio", "Iker", "Benzema"],      
    },
    {
      MatchID: 2,
      TeamA: "Costa Rica",
      TeamB: "Japon",
      PlayersA: ["Pedri", "Gavi", "Navas"],
      PlayersB: ["Blanco", "Pelon", "Santa"],      
    },
  ]
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