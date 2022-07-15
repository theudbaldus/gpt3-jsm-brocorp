import React from "react";
import { Feature } from "../../components";
import "./features.css";

const featureData = [
  {
    title: "Improving end distrusts instantly",
    text: "Something to say no then we are going to wait like a fine little boah."
  },
  {
    title: "Become the tended active",
    text: "Something to say no then we are going to wait like a fine little boah."
  },
  {
    title: "Message or am nothing",
    text: "Something to say no then we are going to wait like a fine little boah."
  },
  {
    title: "Really boy law county",
    text: "Something to say no then we are going to wait like a fine little boah."
  }
]

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">The Future Is Now and You Just Need To Realize It. Step into Future Today & Make It Happen</h1>
        <p>Request Early Access to Get Started</p>
      </div>

      <div className="gpt3__features-container">
        {featureData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  );
};

export default Features;
