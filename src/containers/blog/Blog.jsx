import React from "react";
import "./blog.css";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import { Article } from "../../components";

const Blog = () => {
  return (
    <div className="gpt3__blog section__margin">
      <div className="gpt3__blog-content">
        <h1 className="gradient__text">
          A lot is happening. We are blogging about it
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container__groupA">
          <Article
            imgUrl={blog01}
            date="Sep 26, 2021"
            title="GPT-3 and Open AI how it is the future. Let's explore how it is."
          />
        </div>
        <div className="gpt3__blog-container__groupB">
          <Article
            imgUrl={blog02}
            date="Sep 26, 2021"
            title="GPT-3 and Open AI how it is the future. Let's explore how it is."
          />
          <Article
            imgUrl={blog03}
            date="Sep 26, 2021"
            title="GPT-3 and Open AI how it is the future. Let's explore how it is."
          />
          <Article
            imgUrl={blog04}
            date="Sep 26, 2021"
            title="GPT-3 and Open AI how it is the future. Let's explore how it is."
          />
          <Article
            imgUrl={blog05}
            date="Sep 26, 2021"
            title="GPT-3 and Open AI how it is the future. Let's explore how it is."
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
