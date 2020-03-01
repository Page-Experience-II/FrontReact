import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Upload, Button } from 'antd';
import axios from 'axios';
import { message } from 'antd';
import SelectWorkType from '../../components/Select';
import Brian from "../../image/brian.png";
import defaultImageBackgroundUpload from './../../image/icone/DefaultImageUpload.svg'

const { Dragger } = Upload;

const Wrapper = styled.div`
  background: rgba(255, 255, 255, 0.6);
  position: absolute;
  z-index: 13;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  .modal-setting-profile {
    width: 70%;
    height: 550px;
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

  .modal-setting-title {
    width: 95%;
    font-size: 20px;
    padding: 30px 30px;
    text-align: left;
    border-bottom: 1px solid #70707069;
  }

  .modal-setting-flex {
    display: flex;
    justify-content: center;
    margin-top: 5%;
  }
  .center {
    display: flex;
    flex-direction: row;
    // justify-content: space-around;
  }
  .centerButton {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .btn-close {
    display: block;
    position: absolute;
    text-align: center;
    line-height: 20px;
    width: 20px;
    height: 20px;
    border-radius: 25px;
    top: 5%;
    right: 2%;
    font-size: 15px;
    color: #59deff;
    border: 1px solid #59deff;
  }
  .eventclick {
    pointer-events: none;
  }
  .inputest {
    background: #F1F1F1 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #70707012;
    border: 0.5px solid #70707036;
    opacity: 1;
  }
`;

class ModalPublishWork extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputTitle: '',
      inputDescription: '',
      workType: '',
    };
  }
  handleOk = async () => {  
    const dataPost = JSON.stringify({
        contentUserId: "5e51354eb2f340002b4cb87a",
        contentTitle: "Awesome painting",
        contentDescription: "This is my cool art",
        file: "I am an image",
        contentType: "passion",
    });
  
    this.setState({ loading: true });
    try {
      const response = await axios.post('http://ec2-18-224-19-147.us-east-2.compute.amazonaws.com/api/v1/content/new',
        dataPost, { headers: { 'Content-Type': 'application/json', } });
      console.log(response);
      message.success('Post sending');
      this.props.close();
    } catch (e) {
      console.log(`${e}`);
      message.error('Error during posting');
    }
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 1000);
  };
  render() {
    return (
      <Wrapper>
        <div className="modal-setting-profile">
          <h3 className="modal-setting-title">Publish a post</h3>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Dragger style={{marginLeft: '-20%', minHeight: "150%", minWidth: "150%"}}>
            <p className="ant-upload-drag-icon">
            <img src={defaultImageBackgroundUpload} alt="defaul-image-upload" />
            </p>
            <p className="ant-upload-hint">Drag and drop a header picture here</p>
            <p className="ant-upload-text">Only JPG, PNG and GIF files are allowed</p>
          </Dragger>
        </div>
          <div style={{marginTop: '12%', marginLeft: '13%'}} className="center">
          <strong><p>Title</p></strong>
            <input className="inputest" size="30" style={{marginLeft: '15%'}}></input>
          </div>
          <div style={{marginTop: '2%', marginLeft: '13%'}} className="center">
          <strong><p>Description</p></strong>
            <input className="inputest" size="30" style={{marginLeft: "7.9%"}}></input>
          </div>
          <div style={{marginTop: '2%',marginLeft: '13%'}} className="center">
            <strong><p>Work type</p></strong>
            <div style={{marginLeft: '22%'}} >
              <SelectWorkType placeholder="Type of work"></SelectWorkType>
            </div>
          </div>
          <div className="centerButton">
            <Button onClick={this.handleOk} style={{ marginLeft: '7%', marginTop: '2%', background: "black", borderColor: "#424242" }} type="primary" shape="round" size={20}> Publish </Button>
          </div>
          <Link className="btn-close" onClick={this.props.close}>
            X
          </Link>
        </div>
      </Wrapper>
    );
  }
}
export default ModalPublishWork;