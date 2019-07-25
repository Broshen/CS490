import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
  }
  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  render() {
    if (!this.props.google) {
      return <div>Loading...</div>;
    }

    return (
      <div
        style={{
          position: "relative",
          height: "calc(100vh - 20px)"
        }}
      >
        <Map google={this.props.google} zoom={2}>
          <Marker
            onClick={this.onMarkerClick}
            name={"Toronto"}
            position={{lat:43.659996, lng:-79.228090}} 
          />
          <Marker
            onClick={this.onMarkerClick}
            name={"Missisuaga"}
            position={{lat:43.590672, lng:-79.637179}} 
          />
          <Marker
            onClick={this.onMarkerClick}
            name={"London"}
            position={{lat:42.998968, lng:-81.243692}} 
          />
           <Marker
            onClick={this.onMarkerClick}
            name={"Waterloo"}
            position={{lat:43.463475,  lng:-80.523399}} 
          />
          <Marker
            onClick={this.onMarkerClick}
            name={"Vancouver"}
            position={{lat:49.284139, lng:-123.131080}} 
          />
          
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyCttEUOwA9PcYztuBx_Hy6ErHbjlTd9vFk",
})(MapContainer);
