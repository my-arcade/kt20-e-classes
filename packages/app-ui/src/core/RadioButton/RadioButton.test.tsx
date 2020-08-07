// react libraries
import React from "react";

// third-party libraries
import { mount } from "enzyme";

// components
import RadioButton from "./RadioButton.component";
import theme from "../theme";

describe("RadioButton", () => {
  const render = (props: any) =>
    mount(
      <RadioButton
        {...props}
        name="test-name"
        value="test-value"
        label="testlabel"
        theme={theme}
      />
    );
  describe("renders as expected", () => {
    const wrapper = render({
      checked: true,
    });

    const input = wrapper.find("input");
    const label = wrapper.find("label");

    describe("input", () => {
      it("is of type radio", () => {
        expect(input.props().type).toEqual("radio");
      });

      it("has a unique id set by default", () => {
        expect(input.props().id).toBeDefined();
      });

      it("should have checked set when checked is passed", () => {
        wrapper.setProps({ checked: true });
        expect(input.props().checked).toEqual(true);
      });

      it("should set the name prop as expected", () => {
        expect(input.props().name).toEqual("test-name");
      });
    });

    describe("label", () => {
      it("should set htmlFor", () => {
        expect(label.props().htmlFor).toEqual(input.props().id);
      });

      it("should render a span for the label text", () => {
        const span = label.find("span");
        expect(span.at(1).text()).toEqual("testlabel");
      });

      it("should render a span with hidden class name to hide label text", () => {
        wrapper.setProps({
          hideLabel: true,
        });
        const label = wrapper.find("span");
        const span = label.find("span");
        expect(span.at(1).text()).toEqual("testlabel");
      });

      it("should render label text", () => {
        wrapper.setProps({ label: "test label text" });
        expect(label.text()).toMatch(/test label text/);
      });
    });

    it("should render description text", () => {
      wrapper.setProps({ description: "test description text" });
      const containers = wrapper.find('div');

      expect(containers.at(1).text()).toMatch(/test description text/);
    });
  });

  it("should set id if one is passed in", () => {
    const wrapper = render({
      id: "unique-id",
    });

    const input = wrapper.find("input");
    expect(input.props().id).toEqual("unique-id");
  });
});
