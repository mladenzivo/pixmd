import React from "react";
import {
  Container,
  Button,
  Input,
  Label,
  Form,
  FormGroup,
} from "reactstrap";

import Summary from "../../../components/pages/Summary";

class ResetPassword extends React.Component {
  render = () => (
    <Container>
      <Summary
        title="Set a new password"
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
          <Button className="pix_btn signup">Send</Button>
        </FormGroup>
      </Form>
    </Container>
  );
}
export default ResetPassword;
