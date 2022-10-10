// @ts-nocheck
import React, { useContext } from "react";
import { Col, Input, Row, Typography } from "antd";
import { StepContext } from "../helpers/StepContext";

const FormEducationDetails = () => {
  const stepContext = useContext(StepContext);
  const { employeeData, setEmployeeData } = stepContext;
  const updateInput = (e) => {
    setEmployeeData({
      ...employeeData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div style={{ marginTop: "20px" }}>
      <Row justify="center">
        <Col>
          <Typography.Title level={4}>Education Details</Typography.Title>
        </Col>
      </Row>
      <Row>
        <Col span={8} offset={8} className="row-spacing">
          <Typography.Text>Highest Level of Education</Typography.Text>
          <Input
            name="highestEducation"
            value={employeeData.highestEducation}
            onChange={updateInput}
          />
        </Col>
      </Row>
      <Row>
        <Col span={8} offset={8} className="row-spacing">
          <Typography.Text>
            Specialization in Highest Level of Education
          </Typography.Text>
          <Input
            name="specHighestEducation"
            value={employeeData.specHighestEducation}
            onChange={updateInput}
          />
        </Col>
      </Row>
      <Row>
        <Col span={8} offset={8} className="row-spacing">
          <Typography.Text>Year of Passing</Typography.Text>
          <Input
            name="HighestEdYearOfPassing"
            value={employeeData.yearOfPassing}
            onChange={updateInput}
          />
        </Col>
      </Row>
      <Row>
        <Col span={8} offset={8} className="row-spacing">
          <Typography.Text>Graduation</Typography.Text>
          <Input
            name="graduation"
            value={employeeData.graduation}
            onChange={updateInput}
          />
        </Col>
      </Row>
      <Row className="row-spacing">
        <Col span={8} offset={8}>
          <Typography.Text>Specialization in Graduation</Typography.Text>
          <Input
            name="specGrad"
            value={employeeData.specGrad}
            onChange={updateInput}
          />
        </Col>
      </Row>
      <Row>
        <Col span={8} offset={8} className="row-spacing">
          <Typography.Text>Year of Passing</Typography.Text>
          <Input
            name="gradYearOfPassing"
            value={employeeData.gradYearOfPassing}
            onChange={updateInput}
          />
        </Col>
      </Row>
    </div>
  );
};

export default FormEducationDetails;
