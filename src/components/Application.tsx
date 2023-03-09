import React from "react";
import iphone from "../assets/img/iphone.png";
import google from "../assets/img/google.png";
import apple from "../assets/img/apple.png";


const Application = () => {
  return (
    <section className="application">
      <div className="application__left">
        <h1>Meals on the Go!!!</h1>
        <p className="application__left__text1">
          Download the app to to enjoy discounts, promotions and offers. Amet
          minim mollit non deserunt ullamco est sit aliqua dolor do amet sint
          velit officia consequat duis enim velit mollit exercitation veniam.
        </p>
        <div>
          <p className="application__left__text2">Get the App</p>
          <div className="application__img__market">
            <img src={google} alt="" />
            <img className="apple" src={apple} alt="" />
          </div>
        </div>
      </div>
      <div className="application__right">
        <img src={iphone} alt="iphone" />
      </div>
    </section>
  );
};

export default Application;
