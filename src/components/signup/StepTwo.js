import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  label {
    width: 80%;
    margin: 15px 0;
    font-weight: bold;
  }
  input[type="text"] {
    border: none;
    background: #f1f1f1;
    height: 30px;
    border-radius: 5px;
    width: 80%;
  }
`;

class StepTwo extends Component {
  render() {
    return (
      <Wrapper>
        <form>
          <label>
            Please enter the verification code we sent you via email
          </label>
          <input type="text" />
          <input
            className="btn-next"
            type="button"
            value="Next"
            onClick={this.props.next}
          />
          <input
            className="btn-back"
            type="button"
            value="Back"
            onClick={this.props.back}
          />
        </form>
      </Wrapper>
    );
  }
}

export default StepTwo;
