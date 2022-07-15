import React from "react";
import "./whatGPT3.css";
import { Feature } from "../../components";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title="What is GPT-3" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." />
      </div>

      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>

      <div className="gpt3__whatgpt3-container">
        <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of platform brought bakc to motherland" />
        <Feature title="Knowledgebase" text="At this point I don't know what to write so let's go and improvise something wdyt ???" />
        <Feature title="Education" text="As I said, I don't knwo what to tell you, just imagine there's something interesting here." />
      </div>
    </div>
  );
};

export default WhatGPT3;
