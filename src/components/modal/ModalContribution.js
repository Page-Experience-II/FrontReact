import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Upload, Button } from 'antd';
import axios from 'axios';
import { message } from 'antd';
import { Input } from 'antd';
import Brian from "../../image/brian.png";
import defaultImageBackgroundUpload from './../../image/icone/imageBackground.svg'
import pauseIcon from './../../image/icone/play-button.svg'

const { TextArea } = Input;
const Wrapper = styled.div`
  background: rgba(255, 255, 255, 0.6);
  position: absolute;
  z-index: 13;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  .modal-setting-profile {
    width: 40%;
    height: 45%;
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
  .header {
    display: grid;
    grid-template-columns: [first] 20% auto [last] 20%;
    margin: 0 auto;
    max-width: 1000px;
  }
  .middle {
    margin: 0 auto;
    text-align: center;
  }
  .left {
    margin-left: 85%;
  }
  .right {
    margin-left: auto;
  }
  .square {
    width:515px;
    height:155px;
    maxWidth: 500px;
    maxheight: 150px;
    background:#F1F1F1;
    border-radius: 20px;
  }

  .container {
    display: flex;
    flex-direction: row-reverse;
  }
  .item {
    padding: 10px;
  }
  .push {
    margin-right: auto;
  }

  .inputest {
    border: none;
    overflow: auto;
    outline: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    resize: none;
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
    this.setState({ loading: true });
    try {
      message.warn('Coming Soon');
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
          <h3 className="modal-setting-title">Publish a Contribution</h3>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <div className='square'>
              <div style={{ marginTop: '1%', marginLeft: '1%', display: 'flex', alignItems: 'center'}}>
                <img style={{ maxHeight: '10%', maxWidth: '10%' }} src={Brian}></img>
                <div style={{minWidth: '440px', minHeight: '30px', maxHeight: '30px'}}>
                  <TextArea className="inputest" placeholder="Feeling inspired ? share your thougts..."autoSize={{ maxRows: 5 }} />
                </div>
              </div>
              <div style={{marginTop: '12%', marginLeft: '2%', }} className="container">
                <div className="item">
                  <img src={defaultImageBackgroundUpload}></img>
                </div>
                <div className="item">
                  <img src={pauseIcon}></img>
                </div>
                <div className="item push">
                  <p>#tags</p>
                </div>
              </div>
            </div>
          </div>



          <div style={{display: 'flex', flexDirection:'row-reverse', marginRight: '10%'}}>
            <Button onClick={this.handleOk} style={{background: "black", borderColor: "#424242" }} type="primary" shape="round" size={20}> Publish </Button>
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