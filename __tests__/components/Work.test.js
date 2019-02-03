import React from 'react';
import { shallow } from 'enzyme';
import Work from '../../src/components/views/Showcase/Work';

const wrap = shallow(<Work />);

describe('<Work />', () => {
  it('renders the component successfully', () => {
    expect(wrap).toMatchSnapshot();
  });

  it('renders a section element with className section-padding and id of works', () => {
    expect(wrap.find('section.section-padding').length).toEqual(1);
    expect(wrap.find('section#works').length).toEqual(1);
  });

  it('should render a p element with correct text', () => {
    expect(wrap.find('p.section-p-15').text()).toEqual(
      'Are you ready to satisfy yourself with our world class food, here is how to get started',
    );
  });

  it('should have elements with the correct classNames', () => {
    expect(
      wrap
        .find('h4')
        .first()
        .text(),
    ).toEqual('CREATE AN ACCOUNT');

    expect(
      wrap
        .find('h4')
        .at(1)
        .text(),
    ).toEqual('MAKE ORDER');

    expect(
      wrap
        .find('h4')
        .at(2)
        .text(),
    ).toEqual('WE DELIVER');

    expect(
      wrap
        .find('h4')
        .at(3)
        .text(),
    ).toEqual('SATISFY YOUR STOMACH');
  });

  it('should have h2 element with right text', () => {
    expect(wrap.find('h2').text()).toEqual('How it works');
  });
});
