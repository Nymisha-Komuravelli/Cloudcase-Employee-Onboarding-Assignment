import { Alert, Col, Row, Typography } from "antd";
import React from "react";

const Success = () => {
  return (
    <div style={{marginTop: "30px"}}>
      <Row justify="center">
        <Col>
          <Typography.Title level={4}>
          <Alert message="Employee Onboard Successful!!" type="success" />
          </Typography.Title>
        </Col>
      </Row>
    </div>
  );
};

export default Success;
