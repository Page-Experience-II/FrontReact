import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .btn-token {
    text-decoration: none;
    color: #fff;
    width: 30%;
    height: 50px;
    background: #111;
    line-height: 50px;
    text-align: center;
    border-radius: 5px;
  }

  form {
    height: 250px;
    width: 60%;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0px 3px 6px #00000029;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
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
`;

class Login extends Component {
  state = {
    adminE: "admin",
    adminP: "admin",

    email: "",
    password: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const data = this.state;
    let token;

    if (data.email === data.adminE && data.password === data.adminP) {
      token = (
        <Link className="btn-token" to="/home/">
          Valider
        </Link>
      );
    } else {
      token = <Link className="btn-token">Valider</Link>;
    }

    return (
      <Wrapper>
        <form>
          <label>
            <input
              name="email"
              type="text"
              placeholder="Email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </label>
          <label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </label>
          <Link to="/signup/"> Sign up here </Link>
          {token}
        </form>
      </Wrapper>
    );
  }
}

export default Login;
