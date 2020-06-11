import React from "react";
import { Button } from "reactstrap";
const AccountType = (props) => {
  return (
    <div className="account-type">
      <div className="title">{props.title}</div>
      <div className="price">
        <span>$</span>
        <div>{props.price}</div>
        <p>per month</p>
      </div>
      <div className="description">
        <p>{props.description}</p>
      </div>
      <hr />
      <div className="awards">
        {props.awards &&
          props.awards.map((item, index) => <p key={index}>{item}</p>)}
      </div>
      <hr />
      <Button.Ripple
        className="mt-2"
        color="info"
      >
        GET STARTED
      </Button.Ripple>
    </div>
  );
};

export default AccountType;
