import React, { Component } from "react";
import {
  Container,
  Button,
  Input,
  Label,
  Form,
  FormGroup,
  Spinner,
} from "reactstrap";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Summary from "../../../components/pages/Summary";
import { Auth } from "aws-amplify";

class ConfirmAccount extends Component {
  state = {
    email: "",
    vcode: "",
    isLoading: false,
    errorMsg: "",
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

  confirm = async (e) => {
    e.preventDefault();

    this.setState({ isLoading: true, errorMsg: "" });
    const { email, vcode } = this.state;
    try {
      await Auth.confirmSignUp(email, vcode);
      this.props.history.push("/sign-in");
    } catch (e) {
      this.setState({ isLoading: false, errorMsg: e.message });
    }
  };

  render = () => {
    const { user } = this.props
    const { email, vcode, isLoading, errorMsg } = this.state;

    if (user.isAuthenticated) {
      return <Redirect to="/" />
    }

    return (
      <Container>
        <Summary
          title="Email Verification"
          description="Welcome to the easiest way to explore the before and after photos of
          plastic surgeons. Follow you favorites, ask questions and book an
          appointment."
        />
        <Form className="auth" onSubmit={this.confirm}>
          {errorMsg && <p className="error-msg">{errorMsg}</p>}
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
          <FormGroup>
            <Button className="pix_btn signup">
              {!isLoading ? (
                "Confirm"
              ) : (
                <React.Fragment>
                  <span className="mr-50">Confirm</span>
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

export default connect(mapStateToProps)(ConfirmAccount);
