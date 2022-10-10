// @ts-nocheck
import React, { useContext, useState } from "react";
import {
  Button,
  Col,
  Form,
  Input,
  message,
  Row,
  Steps,
  Typography,
} from "antd";
import "./Form.css";
import FormPersonalDetails from "./FormPersonalDetails";
import FormEducationDetails from "./FormEducationDetails";
import FormExperienceDetails from "./FormExperienceDetails";
import Confirm from "./Confirm";
import Success from "./Success";
import { StepContext } from "../helpers/StepContext";

const EmployeeOnboardingForm = () => {
  const { Step } = Steps;
  const stepContext = useContext(StepContext);

  const steps = [
    {
      title: "Personal Details",
      content: <FormPersonalDetails />,
    },
    {
      title: "Education Details",
      content: <FormEducationDetails />,
    },
    {
      title: "Experience Details",
      content: <FormExperienceDetails />,
    },
    {
      title: "Confirm",
      content: <Confirm />,
    },
    {
      title: "Success",
      content: <Success />,
    },
  ];
  const { current, next, prev, handleSubmit, employeeData } = stepContext;
  return (
    <div>
        {/* <pre>{JSON.stringify(current)}</pre> */}
      <Row justify="center">
        <Col>
          <Typography.Title level={2}>
            Employee Onboarding Form
          </Typography.Title>
        </Col>
      </Row>
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <Row className="row-spacing" justify="center">
        <Col >
          <div className="steps-action">
            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => next()}
              disabled={(current == 2) && !employeeData?.agree}>
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button
                type="primary"
                onClick={() => handleSubmit()}
              >
                Done
              </Button>
            )}
            {(current > 0 && current < 4) && (
              <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                Previous
              </Button>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default EmployeeOnboardingForm;
