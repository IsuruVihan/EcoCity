import React, {useEffect, useState} from 'react';
import {Container} from "react-bootstrap";
import {useJsApiLoader, GoogleMap, Marker, MarkerClusterer} from "@react-google-maps/api";
import coordinates from '../../../data/markers.json';
import {averageGeolocation} from "../../../helpers/geoLocations";
import hubIcon from '../../../assets/images/icons/mapIcons/bin.png';
import truckIcon from '../../../assets/images/icons/mapIcons/gTruck.png';
import crewIcon from '../../../assets/images/icons/mapIcons/maintenance.png';

const Map = (props) => {
    const binLocations = coordinates.bins;
    const truckLocations = coordinates.trucks;
    const maintenanceLocations = coordinates.maintenance;
    const [mapZoom, setMapZoom] = useState(15);
    const [geoCenter, setGeoCenter] = useState({
        lat: 6.912258,
        lng: 79.861998,
    });

    useEffect(() => {
        const avgGeoCenter = averageGeolocation(binLocations.concat(truckLocations).concat(maintenanceLocations));
        const newGeoCenter = {
            lat: avgGeoCenter.latitude,
            lng: avgGeoCenter.longitude
        }
        setGeoCenter(newGeoCenter);
    }, [binLocations])

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


    return (
        <div>
            <GoogleMap
                center={geoCenter}
                zoom={mapZoom}
                mapContainerStyle={containerStyle}
                options={defaultMapOptions}
            >
                {props.showHubs &&
                    binLocations.map((bin, index) => {
                        return <Marker
                            key={index}
                            position={{lat: bin.lat, lng: bin.lon}}
                            icon={hubIcon}
                        />
                    })
                }
                {props.showGTrucks &&
                    truckLocations.map((truck, index) => {
                        return <Marker
                            key={index}
                            position={{lat: truck.lat, lng: truck.lon}}
                            icon={truckIcon}
                        />
                    })
                }
                {props.showMMembers &&
                    maintenanceLocations.map((crewMember, index) => {
                        return <Marker
                            key={index}
                            position={{lat: crewMember.lat, lng: crewMember.lon}}
                            icon={crewIcon}
                        />
                    })
                }
            </GoogleMap>
        </div>
    );
}

export default Map;
