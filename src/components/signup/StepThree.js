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
    width: 60%;
    margin: 15px 0;
    font-weight: bold;
  }
  input[type="text"] {
    border: none;
    background: #f1f1f1;
    height: 30px;
    border-radius: 5px;
    width: 60%;
  }
  p {
    text-align: center;
    a {
      font-weight: bold;
    }
  }
`;

class StepThree extends Component {
  render() {
    return (
      <Wrapper>
        <form>
          <label>Please set a password</label>
          <input type="text" />
          <label>Confirm your password</label>
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

export default StepThree;
