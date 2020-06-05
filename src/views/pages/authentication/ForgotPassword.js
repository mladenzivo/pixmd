import React, { Component } from "react";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
import Summary from "../../../components/pages/Summary";
import sendIcon from "../../../assets/img/svg/SendIcon.svg"
import close from "../../../assets/img/svg/Close.svg"

class ForgotPassword extends Component {
  state = {
    isSent: true,
  };

  handleClickSend = () => {
    this.setState({ isSent: !this.state.isSent });
  };

  render = () => {
    return (
      <React.Fragment>
        {this.state.isSent && (
          <div className="blur-screen">
            <img className="sent-close-btn" src={close} alt="" onClick={this.handleClickSend}/>
            <img className="mb-2" src={sendIcon} alt="" />
            <div className="sent-txt">
              Password reset email sent. Please check your mailbox.
            </div>
          </div>
        )}
        <Container>
          <Summary
            title="Forgot Password"
            description="Welcome to the easiest way to explore the before and after photos of
            plastic surgeons. Follow you favorites, ask questions and book an
            appointment."
          />
          <Form className="auth">
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
              <Button className="pix_btn signup" onClick={this.handleClickSend}>
                Send
              </Button>
            </FormGroup>
          </Form>
        </Container>
      </React.Fragment>
    );
  };
}

export default ForgotPassword;
