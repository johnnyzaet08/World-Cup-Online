import React from "react";
import { useHistory } from "react-router-dom";
// react plugin for creating charts
// @material-ui/core
// @material-ui/icons
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardImages from "components/Card/CardImages";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";

import avatar from "assets/img/copa.png";

export default function Dashboard() {
  const Description = ["Torneo 1", "Torneo 2", "Torneo 3", "Torneo 4", "Torneo 5","Torneo 6"];
  const Index = ["ID1","ID2","ID3","ID4","ID5","ID6"];
  const history = useHistory();
  const handleInputChange = (i) => {
    history.push({
        pathname: '/admin/viewtournament/',
        tournamentID: Index[i],
      });
  }
  return (
    <div>
      <GridContainer>
      {Description.map((data,i) =>{
        return(
          <GridItem xs={12} sm={6} md={3} key={i}>
            <Card>
              <CardHeader color="warning" stats icon>
                <CardImages profile>
                  <img src={avatar} alt="avatar" />
                </CardImages>
              </CardHeader>
              <CardBody>
                <h3>{data}</h3>
              </CardBody>
              <CardFooter>
                <Button color="primary" onClick={(event) => handleInputChange(i,event)}>View Tournament</Button>
              </CardFooter>
              <CardFooter>
                <Button color="primary">Add Match</Button>
              </CardFooter>
            </Card>
          </GridItem>
        );
      })}
      </GridContainer>
    </div>
  );
}
