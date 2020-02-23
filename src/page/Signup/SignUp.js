import React, { Component } from "react";
import { Link } from "react-router-dom";

import StepOne from "../../components/signup/StepOne";
import StepTwo from "../../components/signup/StepTwo";
import StepThree from "../../components/signup/StepThree";
import StepFour from "../../components/signup/StepFour";
import StepFive from "../../components/signup/StepFive";

import Wrapper from './Signup.styledComponent';

class SignUp extends Component {
  state = {
    step: "ONE"
  };

  handleOne = () => {
    this.setState({ step: "ONE" });
  };

  handleTwo = () => {
    
    this.setState({ step: "TWO" });
  
  };

  handleThree = () => {
    this.setState({ step: "THREE" });
  };
  handleFour = () => {
    this.setState({ step: "FOUR" });
  };
  handleFive = () => {
    this.setState({ step: "FIVE" });
  };
  render() {
    let step;

    switch (this.state.step) {
      case "ONE":
        step = <StepOne next={this.handleTwo} />;
        break;
      case "TWO":
        step = <StepTwo next={this.handleThree} back={this.handleOne} />;
        break;
      case "THREE":
        step = <StepThree next={this.handleFour} back={this.handleTwo} />;
        break;
      case "FOUR":
        step = <StepFour next={this.handleFive} back={this.handleThree} />;
        break;
      case "FIVE":
        step = <StepFive back={this.handleFour} />;
        break;
      default:
        step = <StepOne />;
    }

    return (
      <Wrapper>
        <div className="modal-signup">
          <div className="modal-signup-top">
            <h3 className="title-modal-signup">Sign up to the page x</h3>
            <Link className="btn-close">X</Link>
          </div>
          <h1>
            <Link>
              <span>P</span>
              <span>A</span>
              <span>G</span>
              <span>E</span>
              <span className="X">X</span>
            </Link>
          </h1>
          <div className="modal-signup-content">{step}</div>
        </div>
      </Wrapper>
    );
  }
}

export default SignUp;
