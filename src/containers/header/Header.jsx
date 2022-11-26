import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="section__padding  gpt3__header" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's build something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance intelligence unpleasing. Not
          thoughts all exercise blessing. Indulgence way anything joy alteration
          boisterous the attachment to. Party we years to order allow past us.
        </p>
        <div className="gpt3__header-content_input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get started</button>
        </div>
        <div className="gpt3__header-content_people">
          <img src={people} alt="people" />
          <p>1,800 people requsted access a visit in the last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
