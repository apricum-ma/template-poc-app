import React from 'react';
import { shallow } from 'enzyme';
import Card from '../../../components/molecules/Card';

describe('Card', () => {
  it('should render card', () => {
    const wrapper = shallow(<Card />);
    expect(wrapper).toMatchSnapshot();
  });
});
