/* eslint-disable */
import React from 'react';
import { Welcome } from './welcome.controller';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('[Welcome]', () => {
  let ctrl;

  beforeEach(() => {
    ctrl = shallow(<Welcome generateColor={() => null} />).instance();
  });

  it('should have the component controller defined', () => {
    expect(ctrl).toBeDefined();
	});

	it('should return the correct message', () => {
		expect(ctrl.getMessage()).toEqual('React Starter Template');
	});
});
