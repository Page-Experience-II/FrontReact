import React, { Component } from "react";
import styled from "styled-components";
import { Redirect, Link } from "react-router-dom";

import Create from "../../image/icone/createBtn.svg";
import Profile from "../../image/icone/profileBtn.svg";
import IconSearch from "../../image/icone/search.svg";

import DropDownProfil from "../dropdown/DownProfile";
import DropDownPublish from "../dropdown/DownPublish";

import CreatePost from './../modal/ModalPublishWork';
import CreateContribution from './../modal/ModalContribution';
import SettingProfil from "../modal/SettingProfile";

const Bar = styled.div`
  height: 100px;
  width: 100%;
  position: fixe;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;

  .bar {
    width: 60%;
    height: 100px;
    position: relative;

    img {
      position: absolute;
      margin-top: 30px;
      right: 0;
      top: 0;
    }
  }

  .input-search {
    width: 100%;
    height: 44px;
    border: none;
    border: 1px solid #70707069;
    border-radius: 20px;
    display: block;
    padding: 0 15px;
    margin: 20px;
    font-family: "Poppins";
    box-shadow: 0px 3px 35px #00000021;
  }

  .group-icone-search {
    display: flex;
    text-align: left;
    justify-content: center;
    width: 40%;

    .item-icone {
      width: 10%;
      margin: 0 10px;
    }
  }

  :active {
    border-radius: 20px;
  }
`;

class SearchBar extends Component {
  state = {
    search: "",
    actRedirect: false,
    /*Create Contribution */
    createContribution: false,
    /*Create Post*/
    createPost: false,

    dropDownPost: false,
    /**/
    /*Settings*/
    settingProfil: false,
    dropDownProfil: false
    /**/
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleKeydown = event => {
    if (event.key === "Enter") {
      this.setState({ actRedirect: true });
    }
  };


  handleClickSettingProfil = event => {
    this.setState({ dropDownProfil: !this.state.dropDownProfil });
  };

  /*OpenDropDownSettings*/
  handleSettingProfil = () => {
    this.setState({
      settingProfil: !this.state.settingProfil,
      dropDownProfil: false
    });
  };

  handleClickCreatePost = event => {
    this.setState({ dropDownPost: !this.state.dropDownPost });
  };

  /*OpenDropDownPost*/
  handleCreatePost = (value) => {
    if (value === 1) {
      this.setState({
        createPost: true,
        createContribution: false,
        dropDownPost: false
      });
    }
    else if (value === 2) {
      this.setState({
        createContribution: true,
        createPost: false,
        dropDownPost: false
      });
    }
    else {
      this.setState({
        createContribution: false,
        createPost: false,
        dropDownPost: false
    })
    }
  };

  render() {
    const displayDropDownProfil = this.state.dropDownProfil;
    const displayDropDownPost = this.state.dropDownPost;
    let dropDownProfil;
    let dropDownPost;
    let settingProfil;
    let createPost;
    let createContribution;

    if (displayDropDownProfil) {
      dropDownProfil = <DropDownProfil init={this.handleSettingProfil} />;
    }
    if (displayDropDownPost) {
      dropDownPost = <DropDownPublish init={this.handleCreatePost} />;
    }
    if (this.state.createPost) {
      createPost = <CreatePost close={this.handleCreatePost} />;
    }
    if (this.state.createContribution) {
      createContribution = <CreateContribution close={this.handleCreatePost} />;
    }
    if (this.state.settingProfil) {
      settingProfil = <SettingProfil close={this.handleSettingProfil} />;
    }
    return (
      <Bar>
        <div className="bar">
          <input
            className="input-search"
            type="search"
            placeholder="Search"
            name="search"
            onChange={this.handleChange}
            onKeyPress={this.handleKeydown}
            value={this.state.search}
          />
          <img className="icone-search" src={IconSearch} alt="icone search" />
        </div>
        <ul className="group-icone-search">
          <li className="item-icone">
            <Link onClick={this.handleClickCreatePost}>
              <img src={Create} alt="icone" />
            </Link>
          </li>
          <li className="item-icone">
            <Link onClick={this.handleClickSettingProfil}>
              <img src={Profile} alt="icone" />
            </Link>
          </li>
        </ul>
        {this.state.actRedirect ? (
          <Redirect push to={"/search/" + this.state.search} />
        ) : (
          ""
        )}
        {dropDownProfil}
        {settingProfil}
        {dropDownPost}
        {createPost}
        {createContribution}
      </Bar>
    );
  }
}

export default SearchBar;