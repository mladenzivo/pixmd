import React, { Component } from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Spinner,
} from "reactstrap";
import Summary from "../../../components/pages/Summary";
import sendIcon from "../../../assets/img/svg/SendIcon.svg";
import close from "../../../assets/img/svg/Close.svg";

import { Auth } from 'aws-amplify';

class ForgotPassword extends Component {
  state = {
    email: "",
    errorMsg: "",
    isLoading: false,
  };

  handleClickSend = () => {
    this.setState({ isLoading: !this.state.isLoading });
  };

  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  forgotPassword = (e) => {
    e.preventDefault()
    this.setState({ isLoading: true })
    const { email } = this.state;
    
    Auth.forgotPassword(email)
    .then(data => {
      // console.log(data)
      this.setState({
        errorMsg: '',
        isLoading: false
      })
      this.props.history.push('/reset-password', { email: email })
    })
    .catch(err => {
      // console.log(err)
      this.setState({
        errorMsg: err.message,
        isLoading: false
      })
    })
  }

  render = () => {
    const { user } = this.props;
    const { email, errorMsg, isLoading } = this.state;

    if (user.isAuthenticated) {
      return <Redirect to="/" />;
    }

    return (
      <React.Fragment>
        {this.state.isLoading && (
          <div className="blur-screen">
            <img
              className="sent-close-btn"
              src={close}
              alt=""
              onClick={this.handleClickSend}
            />
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
          <Form className="auth" onSubmit={this.forgotPassword}>
            {errorMsg ? <p className="error-msg">{errorMsg}</p> : ""}
            <div className="text mb-2 text-center">
              <p>
                Forgot your password? Enter your email below and if there is an
                associated account, we will send a one-time link to reset your
                password.
              </p>
            </div>
            <FormGroup className="form-label-group mb-5">
              <Input
                type="email"
                id="email"
                bsSize="lg"
                placeholder="Email"
                name="email"
                value={email}
                onChange={this.handleOnChange}
                required={true}
              />
              <Label for="email">Email</Label>
            </FormGroup>
            <FormGroup className="mt-5">
              <Button className="pix_btn signup">
                {!isLoading ? (
                  "Send"
                ) : (
                  <React.Fragment>
                    <span className="mr-50">Send</span>
                    <Spinner color="white" size="sm" />
                  </React.Fragment>
                )}
              </Button>
            </FormGroup>
          </Form>
        </Container>
      </React.Fragment>
    );
  };
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(ForgotPassword);
