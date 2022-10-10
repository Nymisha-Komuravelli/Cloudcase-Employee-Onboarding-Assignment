// @ts-nocheck
import React, { useContext } from "react";
import { Col, Input, Row, Typography, Checkbox } from "antd";
import { StepContext } from "../helpers/StepContext";

const FormExperienceDetails = () => {
  const stepContext = useContext(StepContext);
  const { employeeData, setEmployeeData } = stepContext;
  const updateInput = (e) => {
    setEmployeeData({
      ...employeeData,
      [e.target.name]: e.target.value,
    });
  };

  const calculateSuper = (salary) => {
    let superAnnuation = Number((salary * 10.5) / 100).toFixed(2);
    return superAnnuation;
  };
  const calculateTax = (salary) => {
    let tax = 0;
    let taxableIncome = 0;
    if (salary > 0 && salary <= 18200) {
      tax = 0;
    } else if (salary >= 18201 && salary <= 37000) {
      taxableIncome = salary - 18200;
      tax = Number((taxableIncome * 19) / 100).toFixed(2);
    } else if (salary >= 37001 && salary <= 90000) {
      taxableIncome = salary - 37000;
      tax = 3572 + Number(((taxableIncome * 32.5) / 100).toFixed(2));
    } else if (salary >= 90001 && salary <= 180000) {
      taxableIncome = salary - 90000;
      tax = 20797 + Number(((taxableIncome * 37) / 100).toFixed(2));
    } else if (salary >= 180001) {
      taxableIncome = salary - 180000;
      tax = 54097 + Number(((taxableIncome * 45) / 100).toFixed(2));
    }
    console.log(tax);

    return tax;
  };
  const updateSalary = (e) => {
    let superAnnuation = calculateSuper(e.target.value);
    let tax = calculateTax(e.target.value);

    setEmployeeData({
      ...employeeData,
      [e.target.name]: e.target.value,
      superAnnuation: superAnnuation,
      tax: tax,
    });
  };
  const updateAgree = (e) => {
    setEmployeeData({
      ...employeeData,
      [e.target.name]: e.target.checked
    })
  }
  return (
    <div style={{ marginTop: "20px" }}>
      <Row justify="center">
        <Col>
          <Typography.Title level={4}>
            Professional Experience Details
          </Typography.Title>
        </Col>
      </Row>
      <Row>
        <Col span={8} offset={8} className="row-spacing">
          <Typography.Text>Total years of Experience</Typography.Text>
          <Input
            name="totalYOE"
            value={employeeData.totalYOE}
            onChange={updateInput}
          />
        </Col>
      </Row>
      <Row>
        <Col span={8} offset={8} className="row-spacing">
          <Typography.Text>Salary</Typography.Text>
          <Input
            name="salary"
            value={employeeData.salary}
            onChange={(e) => updateSalary(e)}
          />
        </Col>
      </Row>
      <Row>
        <Col span={8} offset={8} className="row-spacing">
          <Typography.Text>Current Company</Typography.Text>
          <Input
            name="currentCompany"
            value={employeeData.currentCompany}
            onChange={updateInput}
          />
        </Col>
      </Row>
      <Row>
        <Col span={8} offset={8} className="row-spacing">
          <Typography.Text>Designation</Typography.Text>
          <Input
            name="currentDesignation"
            value={employeeData.currentDesignation}
            onChange={updateInput}
          />
        </Col>
      </Row>
      <Row>
        <Col span={8} offset={8} className="row-spacing">
          <Typography.Text>Years of Experience</Typography.Text>
          <Input
            name="currentYOE"
            value={employeeData.currentYOE}
            onChange={updateInput}
          />
        </Col>
      </Row>
      <Row>
        <Col span={8} offset={8} className="row-spacing">
          <Typography.Text>Previous Company</Typography.Text>
          <Input
            name="prevCompany"
            value={employeeData.prevCompany}
            onChange={updateInput}
          />
        </Col>
      </Row>
      <Row className="row-spacing">
        <Col span={8} offset={8}>
          <Typography.Text>Designation</Typography.Text>
          <Input
            name="prevDesignation"
            value={employeeData.prevDesignation}
            onChange={updateInput}
          />
        </Col>
      </Row>
      <Row>
        <Col span={8} offset={8} className="row-spacing">
          <Typography.Text>Years of Experience</Typography.Text>
          <Input
            name="prevYOE"
            value={employeeData.prevYOE}
            onChange={updateInput}
          />
        </Col>
      </Row>
      <Row>
        <Col span={8} offset={8} className="row-spacing">
          <Typography.Text>Additional Details</Typography.Text>
          <Input.TextArea
            name="additionalDetails"
            value={employeeData.additionalDetails}
            onChange={updateInput}
          />
        </Col>
      </Row>
      <Row>
        <Col span={8} offset={8} className="row-spacing">
          <Checkbox
            name="agree"
            checked={employeeData?.agree}
            onChange={updateAgree}
          />
          I have read and agreed to the Terms and Conditions
        </Col>
      </Row>
    </div>
  );
};

export default FormExperienceDetails;
