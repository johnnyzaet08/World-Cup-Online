import React, { useState } from "react";
// @material-ui components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
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
import MultipleDragList from "components/Multiple-list-dnd/multiple-list-dnd.js";
import ControlledRadioButtonsGroup from "components/Radio-group/radio-group.js";
import Dynamicform from "components/Dynamicform/Dynamicform.js";

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

export default function CreateTournament() {

  const classes = useStyles();

  const radioOptions = [
    {
      value: "Selection",
      label: "Selections",
    },
    {
      value: "Local",
      label: "Local",
    },
  ]

  const [tName, setTName] = useState("");
  const [initialDate, setIDate] = useState(null);
  const [endDate, setEDate] = useState(null);
  const [type, setType] = useState(null);

  // *************************************************************
  // ******************** HANDLE EVENTS **************************
  const handleChange = (event) => {
    setTName(event.target.value);
  };

  const handleIDateChange = (event) => {
    setIDate(event);
  };

  const handleEDateChange = (event) => {
    setEDate(event);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleClick = async (event) => {
    event.preventDefault();

    console.log("NAME:",tName);
    console.log("iDATE:",initialDate);
    console.log("eDATE:",endDate);
  }


  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Create Tournament</h4>
              <p className={classes.cardCategoryWhite}>
                Complete all the information for this new tournament
              </p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Tournament Name"
                    id="name"
                    type="text"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      onChange: (event) => handleChange(event),
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <BasicDatePicker
                    labelText="Initial Date"
                    id="initial-date"
                    value={initialDate}
                    onChange={(date) => handleIDateChange(date)}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <BasicDatePicker
                    labelText="End Date"
                    id="end-date"
                    value={endDate}
                    onChange={(date) => handleEDateChange(date)}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <br></br>
                  <ControlledRadioButtonsGroup
                    options={radioOptions}
                    labelText="Tournament Type"
                    row={true}
                    value={type}
                    onChange={(type) => handleTypeChange(type)}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <InputLabel style={{ color: "#000000" }}>
                    <br></br>Out
                  </InputLabel>
                </GridItem>
                <GridItem xs={12} sm={12} md={5}>
                  <InputLabel style={{ color: "#000000" }}>
                    <br></br>In
                  </InputLabel>
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <MultipleDragList />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <br></br>
                  <InputLabel style={{ color: "#000000" }}>
                    Enter the new stage for the tournament
                  </InputLabel>
                  <Dynamicform />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Description"
                    id="description"
                    type="text"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 10,
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="primary" onClick={handleClick}>Create Tournament</Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
