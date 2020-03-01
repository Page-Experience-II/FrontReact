import { Select } from 'antd';
import React from "react";
import styled from "styled-components";
import axios from 'axios';
const { Option } = Select;


const Wrapper = styled.div`
.ant-select-selection {
  background: #F1F1F1 0% 0% no-repeat padding-box;
}
`;

class ModalPublishWork extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      visible: false,
      listPassion: [],
    };
  }
  async getTypeWork() {
    let formdata = new FormData();

    await formdata.append('contentUserId', "5e5242bf9bee4400d1b15e37");

    await axios.get('http://ec2-18-224-19-147.us-east-2.compute.amazonaws.com/api/v1/passion/all/limit/:limit/page/:page')
      .then(res => {
        this.setState({
          listPassion: res.data.data.data,
        });
      })
      .catch(err => {
        console.log(err)
      });
  }

  async componentDidMount () {
    await this.getTypeWork();
  }
  render() {
    return (
      <Wrapper>
      <div className="ant-select-selection">
        <Select
        showSearch
        style={{ width: 200 }}
        placeholder={this.props.placeholder}
        optionFilterProp="children"
        onChange={this.onChange}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        onSearch={this.onSearch}
        filterOption={(input, option) =>
          option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {this.state.listPassion.map((answer, i) => {
           return (<Option key={i} value={answer.passionTitle}>{answer.passionTitle}</Option>)
        })}
      </Select>
      </div>
      </Wrapper>
    );
  }
}
export default ModalPublishWork;