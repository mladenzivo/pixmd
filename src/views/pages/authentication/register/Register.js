import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  Input,
  Label,
  Form,
  FormGroup,
  Spinner,
} from "reactstrap";

import Summary from "../../../../components/pages/Summary";
import Radio from "../../../../components/@vuexy/radio/RadioVuexy";
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy";
import { Check } from "react-feather";

import { Auth } from "aws-amplify";

class Register extends React.Component {
  state = {
    email: "",
    password: "",
    confirm: "",
    customer: true,
    doctor: false,
    terms: false,
    errorMsg: "",
    isLoading: false,
  };

  handleOnChange = (e) => {
    const { name, value, checked } = e.target;
    this.setState({ errorMsg: "" });
    if (name === "customer" || name === "doctor") {
      this.setState({ customer: false, doctor: false });
      this.setState({ [name]: checked });
      return;
    } else if (name === "terms") {
      this.setState({ [name]: checked });
      return;
    }
    this.setState({ [name]: value });
  };

  signUp = async (e) => {
    e.preventDefault();
    const { email, password, confirm, terms, customer } = this.state;

    this.setState({ isLoading: true, errorMsg: "" });
    if (password !== confirm) {
      this.setState({ isLoading: false, errorMsg: "Password doesn't match!" });
      return;
    } else if (!terms) {
      this.setState({
        isLoading: false,
        errorMsg: "Please check the site terms & conditions",
      });
    }

    try {
      const user = await Auth.signUp({
        username: email,
        password: password,
        attributes: {
          user_type: customer ? true : false,
        },
      });
      console.log(user);
    } catch (e) {
      this.setState({ isLoading: false, errorMsg: e.message });
    }
  };

  render = () => {
    const {
      email,
      password,
      confirm,
      customer,
      doctor,
      terms,
      errorMsg,
      isLoading,
    } = this.state;

    return (
      <Container>
        <Summary
          title="Create an Account"
          description="Welcome to the easiest way to explore the before and after photos of
          plastic surgeons. Follow you favorites, ask questions and book an
          appointment."
        />
        <Form className="auth" onSubmit={this.signUp}>
          {errorMsg ? (
            <p className="error-msg">
              {errorMsg.includes("User already exists")
                ? "Username unavailable"
                : errorMsg}
            </p>
          ) : (
            <p className="error-msg"> </p>
          )}
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
          <FormGroup className="form-label-group">
            <Input
              type="password"
              id="conf"
              bsSize="lg"
              placeholder="Confirm"
              name="confirm"
              value={confirm}
              onChange={this.handleOnChange}
              required={true}
            />
            <Label for="conf">Confirm</Label>
          </FormGroup>
          <FormGroup>
            <div className="font-medium-2 text-bold-600 mb-1">
              Type of Account
            </div>
            <Row>
              <Col md={6}>
                <Radio
                  label="Customer/Patient"
                  color="primary"
                  name="customer"
                  checked={customer}
                  onChange={this.handleOnChange}
                />
              </Col>
              <Col md={6}>
                <Radio
                  label="Doctor/Provider"
                  color="primary"
                  name="doctor"
                  checked={doctor}
                  onChange={this.handleOnChange}
                />
              </Col>
            </Row>
          </FormGroup>
          <hr />
          <FormGroup>
            <div className="d-inline-block mr-1">
              <Checkbox
                color="primary"
                icon={<Check className="vx-icon" size={16} />}
                label={`Site usage terms & conditions. I agree`}
                size="md"
                name="terms"
                onChange={this.handleOnChange}
                checked={terms}
              />
            </div>
          </FormGroup>
          <FormGroup>
            <Button className="pix_btn signup">
              {!isLoading ? (
                "Sign up"
              ) : (
                <React.Fragment>
                  <span className="mr-50">Sign up</span>
                  <Spinner color="white" size="sm" />
                </React.Fragment>
              )}
            </Button>
          </FormGroup>
          <FormGroup>
            <div>
              already remember?{" "}
              <span>
                <Link to="/sign-in">Sign in</Link>
              </span>
            </div>
          </FormGroup>
        </Form>
      </Container>
    );
  };
}
export default Register;
