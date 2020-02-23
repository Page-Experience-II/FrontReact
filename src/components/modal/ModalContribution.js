import React from "react";
import { Modal, Button, message } from 'antd';
import CommentMessage from '../CommentMessage';

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

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
      message.success('This is a success message');
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible, loading } = this.state;
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Publish a Contribution
        </Button>
        <Modal
          visible={visible}
          title="Publish a Contribution"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
              Publish
            </Button>,
          ]}
        >
          <CommentMessage></CommentMessage>
        </Modal>
      </div>
    );
  }
}
export default ModalPublishWork;