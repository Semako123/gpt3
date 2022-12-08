import React from "react";
import "./possibility.css";
import possibilityImage from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="pos" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to get Started</h4>
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>
          All jointure ladyship insisted so humanity the friendly bachelor to as
          on by put impossible own apartments to. We so opinion friends me
          message as delight. Whole front of plate heard on ought. All jointure
          ladyship insisted so humanity the friendly bachelor to as on by put
          impossible own apartments to. We so opinion friends me message as
          delight. Whole front of plate heard on ought
        </p>
        <h4>Request Early Access to get Started</h4>
      </div>
    </div>
  );
};

export default Possibility;
