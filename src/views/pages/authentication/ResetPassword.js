import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  Container,
  Button,
  Input,
  Label,
  Form,
  FormGroup,
  Spinner,
} from "reactstrap";

import Summary from "../../../components/pages/Summary";

import { Auth } from "aws-amplify";

class ResetPassword extends React.Component {
  state = {
    email: "",
    vcode: "",
    password: "",
    errorMsg: "",
    isLoading: false,
  };

  componentDidMount = () => {
    const email =
      this.props.location.state !== undefined
        ? this.props.location.state.email !== undefined
          ? this.props.location.state.email
          : ""
        : "";
    this.setState({ email });
  };

  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  resetPassword = (e) => {
    e.preventDefault();
    this.setState({ isLoading: true });
    const { email, vcode, password } = this.state;

    Auth.forgotPasswordSubmit(email, vcode, password)
      .then((data) => {
        // console.log(data)
        this.setState({
          errorMsg: "",
          isLoading: false,
        });
        this.props.history.push("/sign-in", { email: email });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          errorMsg: err.message,
          isLoading: false,
        });
      });
  };

  render = () => {
    const { user } = this.props;
    const { email, vcode, password, errorMsg, isLoading } = this.state;

    if (user.isAuthenticated) {
      return <Redirect to="/" />;
    }

    return (
      <Container>
        <Summary
          title="Set a new password"
          description="Welcome to the easiest way to explore the before and after photos of
        plastic surgeons. Follow you favorites, ask questions and book an
        appointment."
        />
        <Form className="auth" onSubmit={this.resetPassword}>
          {errorMsg ? <p className="error-msg">{errorMsg}</p> : ""}
          <FormGroup className="form-label-group">
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
          <FormGroup className="form-label-group">
            <Input
              type="text"
              id="vcode"
              bsSize="lg"
              placeholder="Code"
              name="vcode"
              value={vcode}
              onChange={this.handleOnChange}
              required={true}
            />
            <Label for="vcode">Code</Label>
          </FormGroup>
          <FormGroup className="form-label-group">
            <Input
              type="password"
              id="pass"
              bsSize="lg"
              placeholder="Password"
              name="password"
              value={password}
              onChange={this.handleOnChange}
              required={true}
            />
            <Label for="pass">Password</Label>
          </FormGroup>
          <FormGroup>
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
    );
  };
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(ResetPassword);
