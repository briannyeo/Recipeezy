import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="aboutHeader">Recipeezy</div>
      <div className="aboutDetails">
        <ul>
          {" "}
          <li>
            Ever walked around aimlessly in a supermarket not knowing what
            ingredients to buy?
          </li>{" "}
          <li>
            Or how about simply needing that touch of inspiration when answering
            the age-old question "What should I cook today?"
          </li>{" "}
        </ul>
        <div className="recipeezyDetails">
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
