import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const customNotification = require('../../Utils/notification');

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
  .hidenField {
    display: none;
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
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      email: ""
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    if (target.type === "file") {
      this.setState({
        photo: target.files[0]
      });

    } else {
      this.setState({
        [name]: value
      });
    }
  }

  valdateFormData() {
    let validateEmail = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g);

    if (this.state.emai === "" || this.state.fullname === "") {
      customNotification.fireNotification("warning", "All fields are required")
      return false;
    } else if (!validateEmail.test(this.state.email)) {
      customNotification.fireNotification("warning", "Email not valid")
      return false;
    }
    return true;
  }

  handleNext(e) {
    e.preventDefault();
    if (this.valdateFormData()) {
      document.getElementById('next').click();
    }
    return false;
  }

  render() {
    return (
      <Wrapper>
        <form>
          <label>First ans last Name</label>
          <input type="text" name="fullname" onChange={this.handleChange} required />
          <label>Email address</label>
          <input type="text" name="email" onChange={this.handleChange} required />
          <input
            className="btn-next"
            type="button"
            value="Next"
            onClick={(e) => { this.handleNext(e) }}
          />
          <div className="hidenField" id="next" onClick={this.props.next}></div>
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
