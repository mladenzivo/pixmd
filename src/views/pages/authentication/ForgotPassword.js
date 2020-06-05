import React, { Component } from "react";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
import Summary from "../../../components/pages/Summary";

class ForgotPassword extends Component {
  render = () => {
    return (
      <Container>
        <Summary
          title="Forgot Password"
          description="Welcome to the easiest way to explore the before and after photos of
          plastic surgeons. Follow you favorites, ask questions and book an
          appointment."
        />
        <Form className="auth forgot-password">
          <div className="text mb-2 text-center">
            <p>
              Forgot your password? Enter your email below and if there is an
              associated account, we will send a one-time link to reset your
              password.
            </p>
          </div>
          <FormGroup className="form-label-group">
            <Input type="text" id="email" bsSize="lg" placeholder="Email" />
            <Label for="email">Email</Label>
          </FormGroup>
          <FormGroup>
            <Button className="pix_btn signup">Send</Button>
          </FormGroup>
        </Form>
      </Container>
    );
  };
}

export default ForgotPassword;
