// @ts-nocheck
import React, { useContext } from "react";
import { Button, Col, Input, Row, Typography } from "antd";
import { StepContext } from "../helpers/StepContext";

const FormPersonalDetails = () => {
  const stepContext = useContext(StepContext);
  const {employeeData, setEmployeeData} = stepContext;
  const updateInput = (e) => {
    setEmployeeData({
        ...employeeData,
        [e.target.name]: e.target.value
    });
  };

  return (
    <div style={{ marginTop: "20px" }}>
        {/* <pre>{JSON.stringify(employeeData)}</pre> */}
      <Row justify="center">
        <Col>
          <Typography.Title level={4}>Personal Details</Typography.Title>
        </Col>
      </Row>
      <Row>
        <Col span={8} offset={8} className="row-spacing">
          <Typography.Text>First Name</Typography.Text>
          <Input name="firstName" value={employeeData.firstName} onChange={updateInput}/>
        </Col>
      </Row>
      <Row>
        <Col span={8} offset={8} className="row-spacing">
          <Typography.Text>Last Name</Typography.Text>
          <Input name="lastName" value={employeeData.lastName} onChange={updateInput}/>
        </Col>
      </Row>
      <Row>
        <Col span={8} offset={8} className="row-spacing">
          <Typography.Text>Email</Typography.Text>
          <Input name="email" value={employeeData.email} onChange={updateInput}/>
        </Col>
      </Row>
      <Row className="row-spacing">
        <Col span={8} offset={8}>
          <Typography.Text>Mobile</Typography.Text>
          <Input name="mobile" value={employeeData.mobile} onChange={updateInput}/>
        </Col>
      </Row>
      <Row className="row-spacing">
        <Col span={8} offset={8}>
          <Typography.Text>Address</Typography.Text>
          <Input name="address" value={employeeData.address} onChange={updateInput}/>
        </Col>
      </Row>
    </div>
  );
};

export default FormPersonalDetails;
