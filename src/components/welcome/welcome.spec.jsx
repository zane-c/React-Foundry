/* eslint-disable */
import React from 'react';
import { Welcome } from './welcome.controller';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('[Welcome]', () => {
  let ctrl;
  let props = { put: () => null };

  beforeEach(() => {
    ctrl = shallow(<Welcome put={props.put} />).instance();
  });

  it('should have the component controller defined', () => {
    expect(ctrl).toBeDefined();
	});

  describe('[generateNewColor]', () => {
    
    it('should return a 7 digit string', () => {
      expect(ctrl.generateColor().length).toEqual(7);
    });
    
    it('should return a properly formatted hash color', () => {
      expect(ctrl.generateColor()[0]).toEqual('#');
    });
  });
});
