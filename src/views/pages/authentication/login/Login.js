import React from "react";
import { connect } from "react-redux";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Spinner,
} from "reactstrap";
import { Link, Redirect } from "react-router-dom";
import Summary from "../../../../components/pages/Summary";
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy";
import { Check } from "react-feather";
import {
  userLoginRequest,
  resetLoginError,
} from "../../../../redux/actions/user";
import { Auth } from "aws-amplify";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    remember: false,
  };

  signIn = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.userLoginRequest(email, password);
  };

  handleOnChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === "remember") {
      this.setState({ [name]: checked });
      return;
    }
    this.setState({ [name]: value });
  };

  componentWillUnmount() {
    this.props.resetLoginError();
  }

  render = () => {
    const { user } = this.props;
    const { email, password, remember } = this.state;

    if (user.isAuthenticated) {
      return (
        <Redirect
          to={
            this.props.location.state
              ? this.props.location.state.from || "/"
              : "/"
          }
        />
      );
    }
    return (
      <Container>
        <Summary
          title="Sign-in"
          description="Welcome to the easiest way to explore the before and after photos of
        plastic surgeons. Follow you favorites, ask questions and book an
        appointment."
        />
        <Form className="auth" onSubmit={this.signIn}>
          {user.loginError && (
            <p className="error-msg">
              {" "}
              {user.loginError.message.includes(
                "Password reset required for the user"
              )
                ? "Welcome back! because we launched a brand new website, you must reset your password. Please click Forgot password below to reset password."
                : user.loginError.message.includes("User is disabled")
                ? "User does not exist."
                : user.loginError.message}
            </p>
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
          <FormGroup className="text-right ">
            <Link
              to="/forgot-password"
              className="font-medium-2 text-bold-500 mb-1"
            >
              Forgot Password?
            </Link>
          </FormGroup>
          <FormGroup>
            <div className="d-inline-block mr-1">
              <Checkbox
                color="primary"
                icon={<Check className="vx-icon" size={16} />}
                label="Remember me"
                size="md"
                name="remember"
                onChange={this.handleOnChange}
                checked={remember}
              />
            </div>
          </FormGroup>
          <FormGroup>
            <Button className="pix_btn signup">
              {!user.loginLoading ? (
                "Sign in"
              ) : (
                <React.Fragment>
                  <span className="mr-50">Sign in</span>
                  <Spinner color="white" size="sm" />
                </React.Fragment>
              )}
            </Button>
          </FormGroup>
          <FormGroup className="my-3">
            <div className="div-or d-flex justify-content-center">
              <div className="text-center d-flex justify-content-center align-items-center">
                OR
              </div>
            </div>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col md={6} sm={12}>
                <Link
                  className="btn btn-primary pix_btn facebook w-100 d-flex justify-content-center align-items-center"
                  to="#"
                  onClick={() => Auth.federatedSignIn({provider: 'Facebook'})}
                >
                  Facebook
                </Link>
              </Col>
              <Col md={6} sm={12}>
                <Link
                  className="btn btn-primary pix_btn google w-100 d-flex justify-content-center align-items-center"
                  to="#"
                  onClick={() => Auth.federatedSignIn({provider: 'Google'})}
                >
                  Google
                </Link>
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <div>
              need an account?{" "}
              <span>
                <Link to="/register">Sign up</Link>
              </span>
            </div>
          </FormGroup>
        </Form>
      </Container>
    );
  };
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, {
  userLoginRequest,
  resetLoginError,
})(Login);
