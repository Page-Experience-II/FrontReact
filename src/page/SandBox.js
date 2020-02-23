import React from "react";
import ModalPublishWork from "./../components/modal/ModalPublishWork"
import ModalPublishContribution from "./../components/modal/ModalContribution"

class SandBox extends React.Component {
  state = {
  };
    render() {
    return (
        <div>
            <ModalPublishWork></ModalPublishWork>
            <ModalPublishContribution></ModalPublishContribution>
        </div>
    );
  }
}

export default SandBox;