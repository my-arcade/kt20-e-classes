// react libraries
import React from "react";

// third party libraries
import { mount } from "enzyme";

// components
import TextArea from "./TextArea.component";
import theme from "../theme";

describe("TextArea", () => {
  describe("should render as expected", () => {
    const wrapper = mount(
      <TextArea appearance="primary" labelText="testlabel" onChange={jest.fn()} theme={theme} />
    );

    const textarea = () => wrapper.find("textarea");

    describe("textarea", () => {
      it("renders a textarea", () => {
        expect(textarea().length).toEqual(1);
      });

      it("should set rows as expected", () => {
        expect(textarea().props().rows).toEqual(4);
        wrapper.setProps({ rows: 10 });
        expect(textarea().props().rows).toEqual(10);
      });

      it("should set cols as expected", () => {
        expect(textarea().props().cols).toEqual(50);
        wrapper.setProps({ cols: 200 });
        expect(textarea().props().cols).toEqual(200);
      });

      it("should set disabled as expected", () => {
        expect(textarea().props().disabled).toEqual(false);
        wrapper.setProps({ disabled: true });
        expect(textarea().props().disabled).toEqual(true);
      });

      it("should set placeholder as expected", () => {
        wrapper.setProps({ placeholder: "Type here" });
        expect(textarea().props().placeholder).toEqual("Type here");
      });

      it("should set value as expected", () => {
        wrapper.setProps({ value: "value set" });
        expect(textarea().props().value).toEqual("value set");
      });

      it("should set defaultValue as expected", () => {
        wrapper.setProps({ defaultValue: "default value" });
        expect(textarea().props().defaultValue).toEqual("default value");
      });
    });

    describe("label", () => {
      wrapper.setProps({ labelText: "testLabel" });
      const renderedLabel = wrapper.find("label");

      it("renders a label", () => {
        expect(renderedLabel.length).toEqual(1);
      });

      it("label has expected text", () => {
        expect(renderedLabel.text()).toEqual("testLabel");
      });
    });
  });

  describe("events", () => {
    describe("enabled textarea", () => {
      const onChange = jest.fn();
      const eventObject = {
        target: { value: "test" },
      };

      const wrapper = mount(
        <TextArea
          id="test"
          appearance="primary"
          labelText="testlabel"
          onChange={onChange}
          theme={theme}
        />
      );

      const textarea = wrapper.find("textarea");

      it("should invoke onChange when textarea value is changed", () => {
        textarea.simulate("change", eventObject);
        expect(onChange).toBeCalled();
      });
    });
  });
});
