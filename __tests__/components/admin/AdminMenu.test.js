import React from 'react';
import { shallow } from 'enzyme';
import { AdminMenu } from '../../../src/components/views/Admin/Menu/AdminMenu';

const showModal = jest.fn();
const wrap = shallow(
  <AdminMenu showModal={showModal} isLoading={false} isOpened={false} hasError={false} />,
);

describe('<AdminMenu />', () => {
  it('should render successfully', () => {
    expect(wrap).toMatchSnapshot();
  });

  it('should render networkError component if hasError is true', () => {
    wrap.setProps({ hasError: true });
    expect(wrap.find('NetworkError').length).toBeGreaterThan(0);
  });
});
