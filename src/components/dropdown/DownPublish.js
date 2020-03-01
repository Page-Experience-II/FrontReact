import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ModalPublishWork from "./../modal/ModalPublishWork"
import ModalPublishContribution from "./../modal/ModalContribution"
import brian from "../../image/brian.png";
import CardModal from "../card/CardModal";

const Wrapper = styled.div`
  width: 250px;
  background: #fff;
  z-index: 55;
  position: absolute;
  top: 10%;
  right: 15%;
  box-shadow: 0px 3px 6px #59ddff87;
  color: #111;

  ul {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 auto;
  }

  li {
    width: 100%;
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 28px;

    a:hover {
      color: #59deff;
    }
  }
`;

const Wrappera = styled.div`
  background: rgba(255, 255, 255, 0.6);
  position: absolute;
  z-index: 13;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  .modal-promote {
    width: 70%;
    margin: 25px auto;
    background: #fff;
    z-index: 13;
    position: absolute;
    top: 1%;
    right: 15%;
    box-shadow: 0px 3px 30px #00000029;
    border-radius: 20px;
    color: #000;
  }

  .modal-promote-title {
    width: 95%;
    padding: 15px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #00000029;
  }

  .btn-close {
    display: block;
    text-align: center;
    line-height: 20px;
    width: 20px;
    height: 20px;
    border-radius: 25px;
    font-size: 15px;
    color: #59deff;
    border: 1px solid #59deff;
  }

  .modal-promote-content {
    width: 100%;
    height: 65px;
    margin: 15px 0;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 68px;
      height: 68px;
    }
  }

  .modal-promote-input {
    width: 90%;
    height: 50%;
    padding: 10px;
    background: #eef0fe;
    border: none;
    border-radius: 10px;
  }

  .modal-promote-bottom {
    display: flex;
    justify-content: flex-end;
    margin: 20px;
  }

  .btn-promote {
    width: 100px;
    height: 31px;
    border: none;
    background: #000000;
    color: #fff;
    box-shadow: 0px 3px 2px #00000029;
    font-size: 13px;
    border-radius: 21px;
    cursor: pointer;
  }
`;

class DownProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModalPublishWork: false,
      showModalPublishContribution: false,
    }
  };
  render() {
    return (
      <Wrapper>
        <ul>
          <li>
            <Link onClick={this.props.init}>Publish a work</Link>
          </li>
          <li>
            <Link onClick={this.props.init}>Publish a Contribution</Link>
          </li>
        </ul>
      </Wrapper>
    );
  }
}

export default DownProfile;
