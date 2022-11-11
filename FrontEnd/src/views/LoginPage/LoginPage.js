import React, { useState } from "react";
import Button from '@mui/material/Button';
import CustomInput from "components/CustomInput/CustomInput.js";
//import { useHistory } from "react-router-dom";

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CardHeader from "components/Card/CardHeader.js";
import Link from '@mui/material/Link';
import axios from "axios";

export default function LoginPage() {
  //const history = useHistory();
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  
  const handleChangeUser = (event) => {
    setUser(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  
  const handleClick = async (event) => {
    event.preventDefault();
    const json = {
      '" Email "': "",
      '" Username "': "",
    };
    
    json.Email = email;
    json.Username = user;
    console.log(json);

    const headers = {
      "Access-Control-Allow-Origin": "*",

      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",

      "Content-Type": "application/json",
    };

    await axios
      .get("http://localhost:5000/getUserLogin/<username>,<password>", json, { headers })
      .then((response) => console.log(response))
      .catch((error) => console.error("There was an error!", error));

    //history.push("/admin/dashboard");
  };




  return (
  <GridContainer alignItems={"center"} justify={"center"}>
    <GridItem xs={6} md={6}>
      <Card>
        <CardHeader color="primary">
          <h4>Login</h4>
        </CardHeader>
        <CardBody>
          <GridContainer alignItems={"center"} justify={"center"}>
            <GridItem xs={6} md={6}>
              <CustomInput
                labelText="Email address"
                id="email-id"
                type="email"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  onChange: (event) => handleChangeUser(event),
                }}
              />
              <CustomInput
                labelText="Username"
                type="text"
                id="username-id"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  onChange: (event) => handleChangeEmail(event),
                }}
              />
            </GridItem>
          </GridContainer>
        </CardBody>
        <CardFooter xs={6} md={6}>
          <Button color="primary"  onClick={handleClick}> Login </Button>
          <Link href="/auth/signup-page" variant="body2">
              {"Don't have an account? Sign Up"}
          </Link>
        </CardFooter>
      </Card>
    </GridItem>
  </GridContainer>
  );
}