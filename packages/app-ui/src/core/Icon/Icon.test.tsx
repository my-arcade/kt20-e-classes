import React from "react";
import { mount } from "enzyme";
import "jest-styled-components";
import Icon from "./Icon.component";

describe("Icon component", () => {
  it("should render the icon", () => {
    const iconWrapper = mount(<Icon icon="email" />);

    expect(iconWrapper).toMatchSnapshot();
  });
});
