import React from "react";
import group from "../../assets/icons/LearnGroup.svg";
import Learn from "../../assets/icons/Learn";
import Graduate from "../../assets/icons/Graduate";
import Work from "../../assets/icons/Work";
import "./style.scss";

const index = () => {
  return (
    <section className="just-learn">
      <div className="container">
        <div className="just-learn-wrapper">
          <div className="learnBlur"></div>
          <img className="learnImg" src={group} alt="" />

          <h2 className="just-learn-wrapper-h2">
            Why <span className="h2-span">learn</span> with our courses?
          </h2>
          <p className="just-learn-wrapper-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod temporidunt ut labore veniam...
          </p>
          <div className="that_card_wrapper">
            <div className="first-card">
              <Learn />
              <h3 className="first-card-h3">01. Learn</h3>
              <p className="first-card-p">
                Lorem ipsum dolor sit amet, consectetur dolorili adipiscing
                elit. Felis donec massa aliqua.
              </p>
            </div>
            <div className="second-card">
              <Graduate />
              <h3 className="second-card-h3">02. Graduate</h3>
              <p className="second-card-p">
                Lorem ipsum dolor sit amet, consectetur dolorili adipiscing
                elit. Felis donec massa aliqua.
              </p>
            </div>
            <div className="third-card">
              <Work />
              <h3 className="third-card-h3">03. Work</h3>
              <p className="third-card-p">
                Lorem ipsum dolor sit amet, consectetur dolorili adipiscing
                elit. Felis donec massa aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
