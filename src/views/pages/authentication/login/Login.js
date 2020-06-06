import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { Link } from "react-router-dom";
import Summary from "../../../../components/pages/Summary";
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy";
import { Check } from "react-feather";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    isLoading: false,
    errorMsg: ""
  }

  render = () => (
    <Container>
      <Summary
        title="Sign-in"
        description="Welcome to the easiest way to explore the before and after photos of
        plastic surgeons. Follow you favorites, ask questions and book an
        appointment."
      />
      <Form className="auth">
        <FormGroup className="form-label-group">
          <Input type="text" id="email" bsSize="lg" placeholder="Email" />
          <Label for="email">Email</Label>
        </FormGroup>
        <FormGroup className="form-label-group">
          <Input type="password" id="pass" bsSize="lg" placeholder="Password" />
          <Label for="pass">Password</Label>
        </FormGroup>
        <FormGroup className="text-right ">
          <Link to="/forgot-password" className="font-medium-2 text-bold-500 mb-1">
            Forgot Password?
          </Link>
        </FormGroup>
        <FormGroup>
          <div className="d-inline-block mr-1">
            <Checkbox
              color="primary"
              icon={<Check className="vx-icon" size={16} />}
              defaultChecked={true}
              label="Remember me"
              size="md"
            />
          </div>
        </FormGroup>
        <FormGroup>
          <Button className="pix_btn signup">Sign In</Button>
        </FormGroup>
        <FormGroup className="my-3">
          <div className="div-or d-flex justify-content-center">
            <div className="text-center d-flex justify-content-center align-items-center">OR</div>
          </div>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col md={6}>
              <Button className="pix_btn facebook w-100">facebook</Button>
            </Col>
            <Col md={6}>
              <Button className="pix_btn twitter w-100">Twitter</Button>
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
}
export default Login;
