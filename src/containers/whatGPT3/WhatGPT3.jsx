import React from "react";
import "./whatGPT3.css";
import { Feature } from "../../components";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin section__padding" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="All jointure ladyship insisted so humanity the friendly bachelor to as on by put impossible own apartments to. We so opinion friends me message as delight. Whole front of plate heard on ought. All jointure ladyship insisted so humanity the friendly bachelor to as on by put impossible own apartments to. We so opinion friends me message as delight. Whole front of plate heard on ought"
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination{" "}
        </h1>
        <p>Explore the library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="We so opinion friends me message as delight. Whole front of plate heard on ought"
        />
        <Feature
          title="knowledgebase"
          text="All jointure ladyship insisted so humanity the friendly bachelor to as on by put impossible own apartments to "
        />
        <Feature
          title="Education"
          text="All jointure ladyship insisted so humanity the friendly bachelor to as on by put impossible own apartments to "
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
