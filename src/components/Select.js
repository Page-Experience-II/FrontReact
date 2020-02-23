import { Select } from 'antd';
import React from "react";
const { Option } = Select;

class ModalPublishWork extends React.Component {
  state = {
    loading: false,
    visible: false,
  };
  onChange(value) {
    console.log(`selected ${value}`);
  }
  
  onBlur() {
    console.log('blur');
  }
  
  onFocus() {
    console.log('focus');
  }
  
  onSearch(val) {
    console.log('search:', val);
  }
  
  render() {
    return (
        <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Select a person"
        optionFilterProp="children"
        onChange={this.onChange}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        onSearch={this.onSearch}
        filterOption={(input, option) =>
          option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        <Option value="Painting">Painting</Option>
        <Option value="Photography">Photography</Option>
        <Option value="Writing">Writing</Option>
      </Select>
    );
  }
}
export default ModalPublishWork;