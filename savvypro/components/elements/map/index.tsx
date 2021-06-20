import React, { Component } from "react";

import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { BuildCustomMarker } from "./customMarker";
import { mapStyle } from "./core";
export class MapContainer extends Component<any> {
  CustomMarker: any;
  myRef = React.createRef();
  constructor(props) {
    super(props);

    this.CustomMarker = BuildCustomMarker(this.props.google);
  }
  componentDidMount() {
    var myLatlng = new google.maps.LatLng(43.665417, -79.403488);
    this.props.markers.map((value, i) => {
      new this.CustomMarker(
        new google.maps.LatLng(value.loc[0], value.loc[1]),
        this.myRef.current.map,
        value.name,
        {
          marker_id: `1_${i}`
        }
      );
    });
  }
  render() {
    const center = [43.612122, -79.935155];
    const map = (
      <Map
        styles={mapStyle}
        ref={this.myRef}
        google={this.props.google}
        initialCenter={{ lat: center[0], lng: center[1] }}
        zoom={9}>
        <InfoWindow>
          <div>
            <h1 />
          </div>
        </InfoWindow>
      </Map>
    );

    return map;
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAjtYCLzddzDAtM3Xj6CbshUMlHXw8iXfU"
})(MapContainer);
