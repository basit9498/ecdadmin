import React, { Component, useState } from "react";
import { Map, Marker, GoogleApiWrapper, InfoWindow } from "google-maps-react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyA16v2Y-D_uSN4eAOp_NhtNdSeT4eOIleI");

export function GoogleMap(props) {
  const [address, setaddress] = useState("");
  const [showingInfoWindow, setshowingInfoWindow] = useState(false);
  const [activeMarker, setactiveMarker] = useState({});
  const [selectedPlace, setselectedPlace] = useState({});
  const [mapCenter, setmapCenter] = useState({
    lat: 34.0151366,
    lng: 71.5249154,
  });

  const onMarkerDragEnd = (evt) => {
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

  const handleChange = (address) => {
    // this.setState({ address });
    setaddress(address);
  };

  const handleSelect = (address) => {
    // this.setState({ address });
    setaddress(address);
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        props.address(address);
        props.lat(latLng.lat);
        props.lng(latLng.lng);
        console.log("Success", latLng);
        console.log("address", address);

        // update center state
        // this.setState({ mapCenter: latLng });
        setmapCenter(latLng);
      })
      .catch((error) => console.error("Error", error));
  };

  return (
    <div id="googleMaps" className="w-full overflow-hidden">
      <PlacesAutocomplete
        value={address}
        onChange={handleChange}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
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
          google={props.google}
          style={{ width: "100%", height: "100%", position: "relative" }}
          initialCenter={{
            lat: mapCenter.lat,
            lng: mapCenter.lng,
          }}
          center={{
            lat: mapCenter.lat,
            lng: mapCenter.lng,
          }}
        >
          <Marker
            draggable={true}
            name={"Current location"}
            onDragend={onMarkerDragEnd}
            position={{
              lat: mapCenter.lat,
              lng: mapCenter.lng,
            }}
          />
        </Map>
      </div>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyA16v2Y-D_uSN4eAOp_NhtNdSeT4eOIleI",
})(GoogleMap);
