import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

class StepOne extends Component {
  render() {
    return (
      <Wrapper>
        <form>
          <label>First ans last Name</label>
          <input type="text" />
          <label>Email address</label>
          <input type="text" />
          <input
            className="btn-next"
            type="button"
            value="Next"
            onClick={this.props.next}
          />
        </form>
        <p>
          By signing in, you agree to our <Link>terms of use</Link>, our privacy
          policy and <Link>use of cookies</Link>.
        </p>
      </Wrapper>
    );
  }
}

export default StepOne;
