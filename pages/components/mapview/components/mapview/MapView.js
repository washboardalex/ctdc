import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const style = {
  height: "400px",
  width: "96.5%"
};

class MapView extends Component {
  constructor() {
    super();
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      mapLoaded: false,
    };
    this.handleMapIdle = this.handleMapIdle.bind(this);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  onMarkerClick = (props, marker, e) => {
    this.setState(prevState => ({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    }));
  };

  onClose = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  onMarkerMounted = element => {
    this.onMarkerClick(element.props, element.marker, element);
  };

  handleMapIdle = () => {
    this.setState({
      mapLoaded: true
    });
  };

  render() {
    return (
      <Map
        google={this.props.google}
        style={style}
        initialCenter={{
          lat: -27.53412,
			    lng: 153.27063
        }}
        zoom={this.props.zoom}
        onIdle={this.handleMapIdle}
      >
        {this.state.mapLoaded && (
          <Marker ref={this.onMarkerMounted} onClick={this.onMarkerClick} />
        )}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <div>Cleve-Tooth Denture Clinic</div>
            <div>100 Princess St, Cleveland QLD 4163</div>
            <div>Ph: 0431 771 088</div>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDyhhLFhaI7oKOojSNJOi2e9lVf8PiYoTk'
})(MapView);
