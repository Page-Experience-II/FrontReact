import React from "react";
import { Modal, Button, Input, message } from 'antd';
import Upload from './../Upload';
import Select from './../Select';
import styled from 'styled-components';
import axios from 'axios';

const DisplayFlex = styled.div`
  margin-top: 5%;
  margin-left: 5%;
  display: flex;
  justify-content: space-between;
`;

const DisplayCenter = styled.div`
  display: flex;
  justify-content: center;
`;

class ModalPublishWork extends React.Component {
  state = {
    loading: false,
    visible: false,
  };
  
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  
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
    } catch (e) {
      console.log(`${e}`);
      message.error('Error during posting');
    }
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 1000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible, loading } = this.state;
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Publish a Work
        </Button>
        <Modal
          visible={visible}
          title="Publish a work"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <DisplayCenter key={1}>
              <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                Publish
              </Button>
            </DisplayCenter>,
          ]}
        >
          <Upload></Upload>
          <DisplayFlex>
              <p style={{ marginTop: '2%' }}>Title</p>
              <Input onBlur={this.onBlur} style={{ width: '50%' }} />
          </DisplayFlex>
          <DisplayFlex>
            <p style={{ marginTop: '2%' }}>Description</p>
            <Input onBlur={this.onBlur} style={{ width: '50%' }} />
          </DisplayFlex>
          <DisplayFlex>
            <p style={{ marginTop: '2%' }}>Work type</p>
            <Select></Select>
          </DisplayFlex>
        </Modal>
      </div>
    );
  }
}
export default ModalPublishWork;