/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { PropTypes } from 'prop-types';

const MapMarker = ({ text }) => <>{text}</>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 6.5538235,
      lng: 3.3664734,
    },
    zoom: 11,
  };

  render() {
    const { center, zoom } = this.props;
    return (
      <div id="map">
        <GoogleMapReact defaultCenter={center} defaultZoom={zoom}>
          <MapMarker text="FoodFast Office location" />
        </GoogleMapReact>
      </div>
    );
  }
}

Map.propTypes = {
  center: PropTypes.object.isRequired,
  zoom: PropTypes.number.isRequired,
};

export { Map, MapMarker };
