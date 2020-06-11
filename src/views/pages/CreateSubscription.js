import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import Summary from "../../components/pages/Summary";
import AccountType from "../../components/pages/AccountType";

const accountTypeData = [
  {
    id: 0,
    title: "Individual Practice",
    price: "49",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt",
    awards: [
      "100 posts per month", "5 Procedure categories", "Not Featured"
    ]
  },
  {
    id: 1,
    title: "Group Practice",
    price: "99",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt",
    awards: [
      "Unlimited posts per month", "Unlimited Procedure Categories", "10 Featured e No Booking Fees"
    ]
  },
  {
    id: 2,
    title: "Featured Practice",
    price: "249",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt",
    awards: [
      "Unlimited posts per month", "30 Days Trial", "No Booking Fees"
    ]
  }
]

class CreateSubscription extends Component {
  render = () => {
    return (
      <Container>
        <Summary
          title="Select an Account Type"
          description={`Activate your account by selecting a subscription below and get ready to become part of the most innovative and popular for patients to browse before & after pix.`}
        />
        <Row>
          {accountTypeData.map((item, index) => (
            <Col md={4} key={index}>
              <AccountType
                title={item.title}
                price={item.price}
                description={item.description}
                awards={item.awards || []}
              />
            </Col>
          ))}
        </Row>
      </Container>
    );
  };
}

export default CreateSubscription;
