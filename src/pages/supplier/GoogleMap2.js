import React, { Component, useState } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';





// moveMarker(props, marker, e) {
//     // console.log(, ) // get the new coordinates after drag end
//     Geocode.fromLatLng(e.latLng.lat(), e.latLng.lng()).then(
//       (response) => {
//         const address = response.results[0].formatted_address;
//         console.log(address);
//       },
//       (error) => {
//         console.error(error);
//       }
//     );
//   }

//note: code formatted for ES6 here
export function GoogleMap() {
    // state = {
    //   // showingInfoWindow: false,
    //   // activeMarker: {},
    //   // selectedPlace: {},
    // };
    const [showingInfoWindow, setshowingInfoWindow] = useState(false)
    const [activeMarker, setactiveMarker] = useState({})
    const [selectedPlace, setselectedPlace] = useState({})

    // onMarkerClick = (props, marker, e) =>
    //   this.setState({
    //     selectedPlace: props,
    //     activeMarker: marker,
    //     showingInfoWindow: true
    //   });

    const onMarkerClick = (props, marker, e) => {
        setselectedPlace(props)
        setactiveMarker(marker)
        setshowingInfoWindow(true)

    }

    // onMapClicked = (props) => {
    //   if (this.state.showingInfoWindow) {
    //     this.setState({
    //       showingInfoWindow: false,
    //       activeMarker: null
    //     })
    //   }
    // };

    const onMapClicked = (props) => {
        if (showingInfoWindow) {
            setshowingInfoWindow(false)
            setactiveMarker(null)
        }
    }


    return (
        <Map google={this.props.google}
            onClick={onMapClicked}>
            <Marker onClick={onMarkerClick}
                name={'Current location'} />

            <InfoWindow
                marker={activeMarker}
                visible={showingInfoWindow}>
                <div>
                    <h1>{selectedPlace.name}</h1>
                </div>
            </InfoWindow>
        </Map>
    )
}
export default GoogleApiWrapper({
    apiKey: ('AIzaSyCtGI7By_mBHON0y5oclmcTeXyQIC1iBZg')
})(GoogleMap)













