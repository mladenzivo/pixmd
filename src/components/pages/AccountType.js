import React from "react";
import { Button } from "reactstrap";
const AccountType = (props) => {
  return (
    <div className="account-type">
      <h3>{props.accountType}</h3>
      <div className="account-price">
        $ <span>{props.accountPrice}</span>
        <p>per month</p>
      </div>
      <div className="description">
        <p>{props.description}</p>
      </div>
      <hr />
      <div className="awards">
        <p>{props.awards}</p>
      </div>
      <hr />
      <Button.Ripple
        color="info"
        // onClick={() => props.onClick()}
      >
        GET STARTED
      </Button.Ripple>
    </div>
  );
};

export default AccountType;
