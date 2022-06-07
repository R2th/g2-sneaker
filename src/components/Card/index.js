import React from "react";

const Card = ({ title, children, cost }) => {
  return (
    <div className="card">
      <div className="card-top">
        <img
          className="card-top-logo"
          alt="card-top-logo"
          src={`${process.env.PUBLIC_URL}/nike.png`}
        />
      </div>
      <div className="card-title">
        {title}
        <span className="card-title-amount">{cost ? `$${cost}` : ""}</span>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Card;
