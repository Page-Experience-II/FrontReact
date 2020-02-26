import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Layout from "../components/layout/Layout";
import Centre from "../components/Centre";
import Side from "../components/Side";
import CardFil from "../components/card/CardFil";
import CardSideHome from "../components/card/CardSideHome";

import brian from "../image/brian.png";
import clara from "../image/clara.png";
import mark from "../image/mark.png";
import sean from "../image/sean.png";

import back1 from "../image/back1.png";
import back2 from "../image/back2.png";
import back3 from "../image/back3.png";
import back4 from "../image/back4.png";

const Wrapper = styled.div`
  .title-center {
    width: 98%;
    text-align: left;
    margin: 0 auto;
    font-size: 25px;
    font-weight: bold;
    padding-top: 15px;
    border-bottom: 1px solid #00000069;
  }

  h3 {
    width: 100%;
    font-size: 20px;
    text-align: center;
    font-weight: bold;
  }
`;

class ProfilePage extends Component {
  state = {};

  render() {
    const target = this.props.match.params.user;
    return (
      <Wrapper>
        <Layout>
          <Centre>
            <div cklasName="profile-top">
              <div className="profile-top-photo">
                <img src={found.id} alt="profile" />
              </div>
              <div className="profile-top-content">
                <div className="profile-top-content-name">
                  <h2>{found.user}</h2>
                  <p>{found.activites}</p>
                </div>
                <p>{found.description}</p>
                <p>{found.cities}</p>
              </div>
            </div>
          </Centre>
          <Side>
            <h3>Recommended</h3>
            <h1>Helloo {target}</h1>
          </Side>
        </Layout>
      </Wrapper>
    );
  }
}

export default ProfilePage;
