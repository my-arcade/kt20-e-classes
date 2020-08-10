// react libraries
import React from "react";

// third-party libraries
import { mount } from "enzyme";

// components
import InputBox from "./Input.component";


describe('The InputBox component', () => {

  it('sets placeholder of input box to the placeholder props passed in', () => {
    const props = {
      placeholder: 'Apple TV',
    };

    const wrapper = mount(<InputBox { ...props as any } />);
    
    expect(wrapper.find('input').props().placeholder).toBe(props.placeholder);
  });

  it('calls onChange prop when input value changes', () => {
    const props = {
      onChange: jest.fn(),
    };

    const wrapper = mount(<InputBox { ...props as any } />);
    wrapper.find('input').simulate('change');
    
    expect(props.onChange).toHaveBeenCalled();
  });

  it('sets value of input to the value prop if passed in', () => {
    const props = {
      value: 'INPUT_DEFAULT_VALUE',
      onChange: jest.fn(),
    };
    const wrapper = mount(<InputBox { ...props as any } />);
    expect(wrapper.find('input').props().value).toBe(props.value);
  });
});