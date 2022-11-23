import React from "react";
import {
  Blog,
  Footer,
  Header,
  WhatGPT3,
  Features,
  Possibility,
} from "./containers";
import { CTA, Navbar, Brand } from "./components";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
