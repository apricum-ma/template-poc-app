import React from 'react';
import { shallow } from 'enzyme';
import UserCard from '../../../components/molecules/UserCard';

describe('User Card', () => {
  it('should render card', () => {
    const wrapper = shallow(<UserCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
