// react libraries
import React from 'react';

// third party libraries 
import { mount } from 'enzyme';
import 'jest-styled-components';
import renderer from "react-test-renderer";

// components
import Link from './Link.component';
import theme from '../theme/index';

describe('Link', () => {
  describe('Renders as expected', () => {
    const link = mount(
      <Link href="www.google.com" theme={theme}>
        A simple link
      </Link>
    );

    it('should inherit the href property', () => {
      expect(link.props().href).toEqual('www.google.com');
    });
    it('should include child content', () => {
      expect(link.text()).toEqual('A simple link');
    });
  });

  describe('Renders with correct colors', () => {
    it("should display with primary color", () => {
      const wrapper = renderer.create(<Link theme={theme} href="www.facebook.com"/>).toJSON();
  
      expect(wrapper).toHaveStyleRule("color", theme.colors.primary);
    });

    it("should display with gray color when disabled", () => {
      const wrapper = renderer.create(<Link theme={theme} href="www.facebook.com" disabled />).toJSON();
  
      expect(wrapper).toHaveStyleRule("color", theme.colors.mediumdark);
    });
  })
});