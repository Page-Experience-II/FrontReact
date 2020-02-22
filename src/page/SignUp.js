import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import StepOne from "../components/signup/StepOne";
import StepTwo from "../components/signup/StepTwo";
import StepThree from "../components/signup/StepThree";
import StepFour from "../components/signup/StepFour";
import StepFive from "../components/signup/StepFive";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .btn-modal-signup {
    text-decoration: none;
    color: #fff;
    width: 30%;
    height: 50px;
    background: #111;
    line-height: 50px;
    text-align: center;
    border-radius: 5px;
  }

  .modal-signup {
    height: 440px;
    width: 60%;
    background: #fff;
    position: relative;
    border-radius: 10px;
    box-shadow: 0px 3px 30px #00000029;
  }

  .modal-signup-top {
    padding: 10px 34px;
    border-bottom: 1px solid #00000029;
    .title-modal-signu {
      font-size: 22px;
      font-weight: bold;
    }
  }

  label {
    display: block;

    input {
      width: 100%;
      height: 35px;
      border: 1px solid #111;
      border-radius: 5px;
      padding: 0 5px;
    }
  }
  .btn-close {
    display: block;
    position: absolute;
    text-align: center;
    line-height: 20px;
    width: 20px;
    height: 20px;
    border-radius: 25px;
    top: 3%;
    right: 2%;
    font-size: 15px;
    color: #59deff;
    border: 1px solid #59deff;
  }
  h1 {
    margin: 20px 0;
    font-size: 22px;
    text-align: center;
    span {
      color: #fff;
      background: #000;
      border-radius: 3px;
      margin: 0 1px;
      padding: 3px;
    }

    .X {
      margin-left: 15px;
    }
  }

  .btn-next {
    background: #111;
    border: none;
    color: #fff;
    width: 120px;
    height: 30px;
    margin: 20px 0;
    border-radius: 26px;
    cursor: pointer;
  }

  .btn-back {
    border: 1px solid #111;
    color: #111;
    width: 120px;
    height: 30px;
    border-radius: 26px;
    cursor: pointer;
  }
`;

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
