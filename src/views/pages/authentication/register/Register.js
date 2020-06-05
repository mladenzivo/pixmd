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
} from "reactstrap";

import Summary from "../../../../components/pages/Summary";
import Radio from "../../../../components/@vuexy/radio/RadioVuexy";
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy";
import { Check } from "react-feather";

class Register extends React.Component {
  render = () => (
    <Container>
      <Summary
        title="Create an Account"
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
        <FormGroup className="form-label-group">
          <Input type="password" id="conf" bsSize="lg" placeholder="Confirm" />
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
                defaultChecked={true}
                name="exampleRadioColors"
              />
            </Col>
            <Col md={6}>
              <Radio
                label="Doctor/Provider"
                color="primary"
                defaultChecked={false}
                name="exampleRadioColors"
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
              defaultChecked={true}
              label={`Site usage terms & conditions. I agree`}
              size="md"
            />
          </div>
        </FormGroup>
        <FormGroup>
          <Button className="pix_btn signup">Sign up</Button>
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
}
export default Register;
