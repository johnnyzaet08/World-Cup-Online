import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import { Form, Row, Col } from "react-bootstrap";

const Dynamicform = () => {
  const [StageData, setStageData] = useState([{ newStage: "" }]);

  const handleChange = (index, event) => {
    const values = [...StageData];
    values[index].newStage = event.target.value;
    setStageData(values);
  };

  const handleAddFields = () => {
    const values = [...StageData];
    values.push({ roomType: "", roomNumber: 0, guest: 0 });
    setStageData(values);
  };

  const handleRemoveFields = () => {
    const values = [...StageData];
    if (values.length > 1) values.pop();
    setStageData(values);
  };
  return (
    <Form>
      {StageData.map((data, i) => {
        return (
          <Row className="mt-3" key={i}>
            <Col xs={8}>
              <Form.Group controlId="formBasicGuest">
                <CustomInput
                  labelText="New Stage"
                  id="name"
                  onChange={(event) => handleChange(i, event)}
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </Form.Group>
            </Col>
          </Row>
        );
      })}
      <Row>
        <Col className="pt-3 d-flex justify-content-between">
          <Button color="primary" onClick={handleAddFields}>
            Add More
          </Button>
          <Button color="primary" onClick={handleRemoveFields}>
            Remove
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Dynamicform;
