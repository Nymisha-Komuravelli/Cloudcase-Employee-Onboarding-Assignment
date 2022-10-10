// @ts-nocheck
import React, { useContext } from "react";
import { Col, Input, Row, Typography } from "antd";
import { StepContext } from "../helpers/StepContext";

const Confirm = () => {
  const stepContext = useContext(StepContext);
  const { employeeData, setEmployeeData } = stepContext;
 
  return (
    <div>
      <Row justify="center">
        <Col>
          <Typography.Title level={4}>
            Confirm Employee Summary
          </Typography.Title>
        </Col>
      </Row>
      {Object.keys(employeeData).length > 0 ? (
        <>
          <Row>
            <Col span={8} offset={8} className="row-spacing">
              <Typography.Text strong>First Name: </Typography.Text>
              <Typography.Text>{employeeData?.firstName}</Typography.Text>
            </Col>
          </Row>
          <Row>
            <Col span={8} offset={8} className="row-spacing">
              <Typography.Text strong>Last Name: </Typography.Text>
              <Typography.Text>{employeeData?.lastName}</Typography.Text>
            </Col>
          </Row>
          <Row>
            <Col span={8} offset={8} className="row-spacing">
              <Typography.Text strong>Mobile: </Typography.Text>
              <Typography.Text>{employeeData?.mobile}</Typography.Text>
            </Col>
          </Row>
          <Row>
            <Col span={8} offset={8} className="row-spacing">
              <Typography.Text strong>Email: </Typography.Text>
              <Typography.Text>{employeeData?.email}</Typography.Text>
            </Col>
          </Row>
          <Row>
            <Col span={8} offset={8} className="row-spacing">
              <Typography.Text strong>
                Highest Level of Education:{" "}
              </Typography.Text>
              <Typography.Text>
                {employeeData?.highestEducation}
              </Typography.Text>
            </Col>
          </Row>
          <Row>
            <Col span={8} offset={8} className="row-spacing">
              <Typography.Text strong>
                Total Years of Experience:{" "}
              </Typography.Text>
              <Typography.Text>{employeeData?.totalYOE}</Typography.Text>
            </Col>
          </Row>
          <Row>
            <Col span={8} offset={8} className="row-spacing">
              <Typography.Text strong>Current Company: </Typography.Text>
              <Typography.Text>{employeeData?.currentCompany}</Typography.Text>
            </Col>
          </Row>
          <Row>
            <Col span={8} offset={8} className="row-spacing">
              <Typography.Text strong>Salary: </Typography.Text>
              <Typography.Text>&#36; {employeeData?.salary}</Typography.Text>
            </Col>
          </Row>
          <Row>
            <Col span={8} offset={8} className="row-spacing">
              <Typography.Text strong>Super Annuation: </Typography.Text>
              <Typography.Text>&#36; {employeeData?.superAnnuation}</Typography.Text>
            </Col>
          </Row>
          <Row>
            <Col span={8} offset={8} className="row-spacing">
              <Typography.Text strong>Tax: </Typography.Text>
              <Typography.Text>&#36; {employeeData?.tax}</Typography.Text>
            </Col>
          </Row>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Confirm;
