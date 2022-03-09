import React from "react";
import "./About.css";
import Recipeezy from "../../images/Recipeezy.png";

const About = () => {
  return (
    <div className="container">
      {/* <div className="about-header">
        <img className="logo" src={Recipeezy}></img>
      </div> */}

      <div className="about-details">
        <div className="about-context">
          {" "}
          Ever walked around aimlessly in a supermarket not knowing what
          ingredients to buy? Or how about simply needing that touch of
          inspiration when answering the age-old question "What should I cook
          today? "
        </div>

        <div
          className="about-instructions"
          style={{ fontFamily: "Bitter, serif" }}
        >
          How Recipeezy works:
          <ol>
            <li>
              Type an ingredient into the "Search" bar (such as "Chicken")
            </li>
            <li>Add your favourite recipes to "Planned Meals"</li>
            <li>
              Refer to your "Grocery List" the next time you visit a grocery
              store!{" "}
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default About;
