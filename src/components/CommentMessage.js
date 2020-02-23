import React from "react";
import { Comment, Input } from 'antd';

const { TextArea } = Input;

class CommentMessage extends React.Component {
  state = {
  };

  render() {
    return (
      <Comment
        content={
          <TextArea rows={4} />
        }
      />
    );
  }
}

export default CommentMessage;