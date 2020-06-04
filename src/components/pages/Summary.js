import React from "react";

const Summary = (props) => {
  return (
    <div className="summary text-center">
      <h1 className="summary-title">{props.title}</h1>
      <div className="description">
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Summary;
