import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper, InfoWindow } from "google-maps-react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyA16v2Y-D_uSN4eAOp_NhtNdSeT4eOIleI");


export class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // for google map places autocomplete
      address: "",

      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},

      mapCenter: {
        lat: 49.2827291,
        lng: -123.1207375,
      },
    };
  }

  onMarkerDragEnd = evt => {
    // console.log(evt.mapCenter.lat);
    Geocode.fromLatLng(evt.mapCenter.lat, evt.mapCenter.lng).then(
      (response) => {
        const address1 = response.results[0].formatted_address;
        console.log(address1);
      },
      (error) => {
        console.error("err", error);
      }
    );
  };





  handleChange = (address) => {
    this.setState({ address });
  };

  handleSelect = (address) => {
    this.setState({ address });
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        console.log("Success", latLng);
        console.log('address', address)
        // update center state
        this.setState({ mapCenter: latLng });
      })
      .catch((error) => console.error("Error", error));
  };

  render() {
    return (
      <div id="googleMaps" className="w-full overflow-hidden">
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: "Search Places ...",
                  className: "location-search-input h-11 border pl-3 mb-3 w-full",
                })}
              />
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map((suggestion) => {
                  const className = suggestion.active
                    ? "suggestion-item--active"
                    : "suggestion-item";
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? { backgroundColor: "#fafafa", cursor: "pointer" }
                    : { backgroundColor: "#ffffff", cursor: "pointer" };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
        <div className="w-[400px] bg-red-600">
          <Map
            google={this.props.google}
            style={{ width: '100%', height: '100%', position: 'relative' }}
            initialCenter={{
              lat: this.state.mapCenter.lat,
              lng: this.state.mapCenter.lng,
            }}
            center={{
              lat: this.state.mapCenter.lat,
              lng: this.state.mapCenter.lng,
            }}
          >
            <Marker
              draggable={true}
              name={'Current location'}
              onDragend={this.onMarkerDragEnd}
              position={{
                lat: this.state.mapCenter.lat,
                lng: this.state.mapCenter.lng,
              }}

            />
          </Map>

        </div>

      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyA16v2Y-D_uSN4eAOp_NhtNdSeT4eOIleI",
})(GoogleMap);
