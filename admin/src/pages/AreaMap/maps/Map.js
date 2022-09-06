import React from 'react';
import {Container} from "react-bootstrap";
import {useJsApiLoader, GoogleMap, Marker, MarkerClusterer} from "@react-google-maps/api";
import coordinates from '../../../data/markers.json';

const Map = () => {
    const containerStyle = {
        width: "1225px",
        height: "550px",
    };

    const exampleMapStyles = [
        {
            featureType: "poi",
            elementType: "geometry",
            stylers: [
                {
                    color: "#aabbcc",
                },
                {
                    visibility: "off",
                },

            ],
        },
        {
            featureType: "transit",
            elementType: "all",
            stylers: [
                {
                    color: "#aabbcc",
                },
                {
                    visibility: "off",
                },

            ],
        },
        {
            featureType: "poi",
            elementType: "labels",
            stylers: [
                {
                    visibility: "off",
                },
            ],
        },
        {
            featureType: "landscape",
            elementType: "labels.icon",
            stylers: [
                {
                    visibility: "off",
                },
            ],
        },

    ];

    const center = {
        lat: 6.912258,
        lng: 79.861998,
    };

    const {isLoaded} = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: process.env.REACT_APP_GMAPS_API_KEY,
    });

    const defaultMapOptions = {
        styles: exampleMapStyles,
    };

    if (!isLoaded) {
        return <>Not Loaded</>;
    }

    const binLocations = coordinates.bins;
    return (
        <div>
            <GoogleMap
                center={center}
                zoom={15}
                mapContainerStyle={containerStyle}
                options={defaultMapOptions}
            >
                {
                    binLocations.map((bin, index) => {
                        return <Marker
                            key={index}
                            position={{lat: bin.lat, lng: bin.lon}}
                        />
                    })
                }
            </GoogleMap>
        </div>
    );
}

export default Map;
