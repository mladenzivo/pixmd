import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import Summary from "../../components/pages/Summary";
import AccountType from "../../components/pages/AccountType";

class CreateSubscription extends Component {
  render = () => {
    return (
      <Container>
        <Summary
          title="Select an Account Type"
          description={`Activate your account by selecting a subscription below and get ready to become part of the most innovative and popular for patients to browse before & after pix.`}
        />
        <Row>
          <Col md={4}>
            <AccountType
              accountType="Individual Practice"
              accountPrice="49"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt"
              awards="100 posts per month 5 Procedure categories Not Featured"
            />
          </Col>
          <Col md={4}>
            <AccountType
              accountType="Individual Practice"
              accountPrice="49"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt"
              awards="100 posts per month 5 Procedure categories Not Featured"
            />
          </Col>
          <Col md={4}>
            <AccountType
              accountType="Individual Practice"
              accountPrice="49"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt"
              awards="100 posts per month 5 Procedure categories Not Featured"
            />
          </Col>
        </Row>
      </Container>
    );
  };
}

export default CreateSubscription;
