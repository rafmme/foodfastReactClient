import React from 'react';
import { shallow } from 'enzyme';
import { Map, MapMarker } from '../../src/components/views/Map/Map';

const wrap = shallow(<Map />);

describe('<Map />', () => {
  it('renders the component successfully', () => {
    expect(wrap).toMatchSnapshot();
  });

  it('should match the default props value for the map location', () => {
    expect(typeof wrap.props('center').children.props.defaultCenter).toEqual('object');
    expect(typeof wrap.props('zoom').children.props.defaultZoom).toEqual('number');
    expect(wrap.props('center').children.props.defaultCenter.lat).toEqual(6.5538235);
    expect(wrap.props('center').children.props.defaultCenter.lng).toEqual(3.3664734);
    expect(wrap.props('zoom').children.props.defaultZoom).toEqual(11);
  });

  it('should display the passed in props text', () => {
    const mapMarkerWrap = shallow(<MapMarker />);
    mapMarkerWrap.setProps({ text: 'Hello World' });
    expect(mapMarkerWrap.text()).toEqual('Hello World');
  });
});
