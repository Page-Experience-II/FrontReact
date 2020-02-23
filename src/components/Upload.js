import React from "react";
import { Upload } from 'antd';
import defaultImageBackgroundUpload from './../image/icone/DefaultImageUpload.svg'

const { Dragger } = Upload;

class ModalPublishWork extends React.Component {
  render() {
    return (
        <Dragger>
            <p className="ant-upload-drag-icon">
            <img src={defaultImageBackgroundUpload} alt="defaul-image-upload" />
            </p>
            <p className="ant-upload-hint">Drag and drop a header picture here</p>
            <p className="ant-upload-text">Only JPG, PNG and GIF files are allowed</p>
        </Dragger>
    );
  }
}
export default ModalPublishWork;