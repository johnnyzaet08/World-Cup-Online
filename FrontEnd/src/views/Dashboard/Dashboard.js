import React from "react";
// react plugin for creating charts
// @material-ui/core
// @material-ui/icons
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardImages from "components/Card/CardImages";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";

import avatar from "assets/img/copa.png";

export default function Dashboard() {
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardImages profile>
                <img src={avatar} alt="avatar" />
              </CardImages>
            </CardHeader>
            <cardBody>
              <h3>Information</h3>
            </cardBody>
            <CardFooter>
              <Button color="primary">View Tournament</Button>
            </CardFooter>
            <CardFooter>
              <Button color="primary">Add Match</Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
