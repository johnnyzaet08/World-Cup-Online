import React, { useEffect, useState } from "react";
import axios from "axios";
// @material-ui/core components
import Quiniela from "components/Quiniela/Quiniela.js";

export default function matchResult() {
  const tournamentID = sessionStorage.getItem("TournamentID");
  
  console.log("Se captura todo lo del tournament: ", tournamentID);
  
  const [matches, setMatches] = useState([
    {
        "MatchID": 1,
        "PlayersA": [
            [
                "Kendall",
                "Watson"
            ],
            [
                "Alvaro",
                "Zamora"
            ],
            [
                "Aaron",
                "Cruz"
            ],
            [
                "Pablo",
                "Arboine"
            ],
            [
                "Fidel",
                "Escobar"
            ],
            [
                "Gerald",
                "Taylor"
            ],
            [
                "Ryan",
                "Bolaños"
            ],
            [
                "Ricardo",
                "Blanco"
            ],
            [
                "Sergio ",
                "Cespedes"
            ],
            [
                "Youstin",
                "Salas"
            ],
            [
                "Mariano",
                "Torres"
            ],
            [
                "Ulises",
                "Segura"
            ],
            [
                "Marvin",
                "Angulo"
            ],
            [
                "Christian",
                "Bolaños"
            ],
            [
                "Luis",
                "Paradela"
            ],
            [
                "Andy",
                "Reyes"
            ],
            [
                "Orlando",
                "Sinclair"
            ],
            [
                "Ariel",
                "Rodriguez"
            ],
            [
                "Javon",
                "East"
            ],
            [
                "Andy",
                "Reyes"
            ]
        ],
        "PlayersB": [
            [
                "Carlos",
                " Mora"
            ],
            [
                "Celso",
                "Borges"
            ],
            [
                "Johan ",
                "Venegas"
            ],
            [
                "Aaron ",
                "Suarez"
            ],
            [
                "Bryan ",
                "Ruiz"
            ],
            [
                "Leonel",
                "Moreira"
            ],
            [
                "Byron",
                "Mora"
            ],
            [
                "Alexis",
                "Gamboa"
            ],
            [
                "Pipo",
                "Gonzalez"
            ],
            [
                "Audrey",
                "David"
            ],
            [
                "Ian",
                "Smith"
            ],
            [
                "Yael",
                "Lopez"
            ],
            [
                "Bernal ",
                "Afaro"
            ],
            [
                "Alexander",
                "Lopez"
            ],
            [
                "Freddy",
                "Gondola"
            ],
            [
                "Josimar",
                "Alcocer"
            ],
            [
                "Doryan",
                "Venegas"
            ],
            [
                "Jose",
                "Cubero"
            ],
            [
                "Bryan",
                "Feliz"
            ],
            [
                "Erick",
                "Cabalceta"
            ]
        ],
        "TeamA": "Saprisa",
        "TeamB": "Alajuela"
    },
    {
        "MatchID": 2,
        "PlayersA": [
            [
                "Daniel",
                "Chacon"
            ],
            [
                "Isaac",
                "Paris"
            ],
            [
                "Kevin",
                "Briceño"
            ],
            [
                "Darryl",
                "Parker"
            ],
            [
                "Marco",
                "Cubillo"
            ],
            [
                "Kevin",
                "Espinoza"
            ],
            [
                "José",
                "Vargas"
            ],
            [
                "William",
                "Quieros"
            ],
            [
                "Brandon",
                "Bonilla"
            ],
            [
                "Mikel",
                "Gonzalez"
            ],
            [
                "Jose",
                "Quiros"
            ],
            [
                "Diego ",
                "Sanchez"
            ],
            [
                "Victor",
                "Murillo"
            ],
            [
                "Mauricio",
                "Montero"
            ],
            [
                "Michael",
                "Barrantes"
            ],
            [
                "Allen ",
                "Guevara"
            ],
            [
                "Marcel ",
                "Hernandez"
            ],
            [
                "Marcos ",
                "Ureña"
            ],
            [
                "Dylan ",
                "Flores"
            ],
            [
                "Kenneth",
                "Cerdas"
            ]
        ],
        "PlayersB": [
            [
                "Kendall",
                "Watson"
            ],
            [
                "Alvaro",
                "Zamora"
            ],
            [
                "Aaron",
                "Cruz"
            ],
            [
                "Pablo",
                "Arboine"
            ],
            [
                "Fidel",
                "Escobar"
            ],
            [
                "Gerald",
                "Taylor"
            ],
            [
                "Ryan",
                "Bolaños"
            ],
            [
                "Ricardo",
                "Blanco"
            ],
            [
                "Sergio ",
                "Cespedes"
            ],
            [
                "Youstin",
                "Salas"
            ],
            [
                "Mariano",
                "Torres"
            ],
            [
                "Ulises",
                "Segura"
            ],
            [
                "Marvin",
                "Angulo"
            ],
            [
                "Christian",
                "Bolaños"
            ],
            [
                "Luis",
                "Paradela"
            ],
            [
                "Andy",
                "Reyes"
            ],
            [
                "Orlando",
                "Sinclair"
            ],
            [
                "Ariel",
                "Rodriguez"
            ],
            [
                "Javon",
                "East"
            ],
            [
                "Andy",
                "Reyes"
            ]
        ],
        "TeamA": "Cartago",
        "TeamB": "Saprisa"
    },
    {
        "MatchID": 3,
        "PlayersA": [
            [
                "Esteban ",
                " Alvarado"
            ],
            [
                "Douglas ",
                " Lopez"
            ],
            [
                "Keysher",
                " Fuller"
            ],
            [
                "Christopher",
                "Meneses"
            ],
            [
                "Anthony",
                "Contreras"
            ],
            [
                "Orlando",
                "Galo"
            ],
            [
                "Jose",
                "Ortiz"
            ],
            [
                "John",
                "Ruiz"
            ],
            [
                "Luis",
                "Franco"
            ],
            [
                "Jordy",
                "Hernandez"
            ],
            [
                "Jeferson",
                "Brenes"
            ],
            [
                "Yeltsin",
                "Tejeda"
            ],
            [
                "Rawy",
                "Rodriguez"
            ],
            [
                "Diego",
                "Gonzalez"
            ],
            [
                "Keyner",
                "Brown"
            ],
            [
                "Ariel",
                "Soto"
            ],
            [
                "Aaron",
                "Salazar"
            ],
            [
                "Miguel",
                "Basulto"
            ],
            [
                "Carlos",
                "Umaña"
            ],
            [
                "Bryan",
                "Segura"
            ]
        ],
        "PlayersB": [
            [
                "Carlos",
                " Mora"
            ],
            [
                "Celso",
                "Borges"
            ],
            [
                "Johan ",
                "Venegas"
            ],
            [
                "Aaron ",
                "Suarez"
            ],
            [
                "Bryan ",
                "Ruiz"
            ],
            [
                "Leonel",
                "Moreira"
            ],
            [
                "Byron",
                "Mora"
            ],
            [
                "Alexis",
                "Gamboa"
            ],
            [
                "Pipo",
                "Gonzalez"
            ],
            [
                "Audrey",
                "David"
            ],
            [
                "Ian",
                "Smith"
            ],
            [
                "Yael",
                "Lopez"
            ],
            [
                "Bernal ",
                "Afaro"
            ],
            [
                "Alexander",
                "Lopez"
            ],
            [
                "Freddy",
                "Gondola"
            ],
            [
                "Josimar",
                "Alcocer"
            ],
            [
                "Doryan",
                "Venegas"
            ],
            [
                "Jose",
                "Cubero"
            ],
            [
                "Bryan",
                "Feliz"
            ],
            [
                "Erick",
                "Cabalceta"
            ]
        ],
        "TeamA": "Heredia",
        "TeamB": "Alajuela"
    },
    {
        "MatchID": 4,
        "PlayersA": [
            [
                "Kendall",
                "Watson"
            ],
            [
                "Alvaro",
                "Zamora"
            ],
            [
                "Aaron",
                "Cruz"
            ],
            [
                "Pablo",
                "Arboine"
            ],
            [
                "Fidel",
                "Escobar"
            ],
            [
                "Gerald",
                "Taylor"
            ],
            [
                "Ryan",
                "Bolaños"
            ],
            [
                "Ricardo",
                "Blanco"
            ],
            [
                "Sergio ",
                "Cespedes"
            ],
            [
                "Youstin",
                "Salas"
            ],
            [
                "Mariano",
                "Torres"
            ],
            [
                "Ulises",
                "Segura"
            ],
            [
                "Marvin",
                "Angulo"
            ],
            [
                "Christian",
                "Bolaños"
            ],
            [
                "Luis",
                "Paradela"
            ],
            [
                "Andy",
                "Reyes"
            ],
            [
                "Orlando",
                "Sinclair"
            ],
            [
                "Ariel",
                "Rodriguez"
            ],
            [
                "Javon",
                "East"
            ],
            [
                "Andy",
                "Reyes"
            ]
        ],
        "PlayersB": [
            [
                "Esteban ",
                " Alvarado"
            ],
            [
                "Douglas ",
                " Lopez"
            ],
            [
                "Keysher",
                " Fuller"
            ],
            [
                "Christopher",
                "Meneses"
            ],
            [
                "Anthony",
                "Contreras"
            ],
            [
                "Orlando",
                "Galo"
            ],
            [
                "Jose",
                "Ortiz"
            ],
            [
                "John",
                "Ruiz"
            ],
            [
                "Luis",
                "Franco"
            ],
            [
                "Jordy",
                "Hernandez"
            ],
            [
                "Jeferson",
                "Brenes"
            ],
            [
                "Yeltsin",
                "Tejeda"
            ],
            [
                "Rawy",
                "Rodriguez"
            ],
            [
                "Diego",
                "Gonzalez"
            ],
            [
                "Keyner",
                "Brown"
            ],
            [
                "Ariel",
                "Soto"
            ],
            [
                "Aaron",
                "Salazar"
            ],
            [
                "Miguel",
                "Basulto"
            ],
            [
                "Carlos",
                "Umaña"
            ],
            [
                "Bryan",
                "Segura"
            ]
        ],
        "TeamA": "Saprisa",
        "TeamB": "Heredia"
    }
]);

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
          var PlayersA = [];
          var PlayersB = [];
          data.PlayersA.forEach((player) => {
            PlayersA.push(player[0].concat(" ", player[1]));
          });
          data.PlayersB.forEach((player) => {
            PlayersB.push(player[0].concat(" ", player[1]));
          });
          return(
            <Quiniela
              key={i}
              matchID = {data.MatchID}
              teamA = {data.TeamA}
              teamB = {data.TeamB}
              playersA = {PlayersA}
              playersB = {PlayersB}
            />
          )
        })
      }
    </div>
  );
}