import React from "react";
import { shallow } from "enzyme";
import Avatar from "./Avatar.component";

describe("Avatar Component", () => {
  it("should display the avatar", () => {
    const avatar = shallow(<Avatar />);
    expect(avatar).toMatchSnapshot();
  });
});
