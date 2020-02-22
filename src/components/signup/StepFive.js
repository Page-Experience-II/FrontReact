import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  select {
    width: 40%;
    border: 0.5px solid #70707036;
    height: 30px;
    border-radius: 5px;
    font-weight: bold;

    option {
      font-weight: bold;
      :hover{
        background:#EBEBEB
        color:#111;
      }
    }
  }
`;

class StepFive extends Component {
  render() {
    return (
      <Wrapper>
        <form>
          <h3>What form of expression you're interested in?</h3>.
          <select>
            <option value="Photography">Writing</option>
            <option value="Painting">Painting</option>
            <option value="Writing">Writing</option>
          </select>
          <input
            className="btn-next"
            type="button"
            value="Finish"
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

export default StepFive;
