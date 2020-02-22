import React, { Component } from "react";
import styled from "styled-components";
import Masque from "../../image/icone/masques1.svg";

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
  input[type="file"] {
    border: none;
    background: #f1f1f1;
    margin-top: 15px;
    border-radius: 5px;
  }
  .masque {
    height: 100px;
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f1f1f1;
    img {
      width: 50%;
      height: auto;
    }
  }
  h5 {
    margin-top: 10px;
  }
`;

class StepFour extends Component {
  render() {
    return (
      <Wrapper>
        <form>
          <div className="masque">
            <img src={Masque} alt="masque" />
          </div>
          <input type="file" />
          <h5>Please upload a profile picture</h5>
          <p>
            This step is mandatory in order to complete creating your profile.
          </p>
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

export default StepFour;
