import React from "react";
import { shallow, mount } from "enzyme";
import 'jest-styled-components';
import renderer from "react-test-renderer";
import Button from "./Button.component";
import theme from "../theme";

describe("Button Component", () => {
  it("should display the Button correctly", () => {
    const button = shallow(<Button theme={theme} />);
    expect(button).toMatchSnapshot();
  });

  it('should call an onclick function when clicked', () => {
    const mockFn = jest.fn();
    const wrapper = mount(<Button theme={theme} onClick={mockFn}/>);

    expect(mockFn).not.toHaveBeenCalled();

    wrapper.simulate('click');
    expect(mockFn).toHaveBeenCalled();

  })

  it("should display default button with correct background color", () => {
    const wrapper = renderer.create(<Button theme={theme} containsIcon/>).toJSON();

    expect(wrapper).toHaveStyleRule("background", 'transparent');
  });

  it("should display secondary button with correct background color ", () => {
    const wrapper = renderer.create(<Button theme={theme} appearance="secondary"/>).toJSON();

    expect(wrapper).toHaveStyleRule("background", theme.colors.secondary);
  });
});
