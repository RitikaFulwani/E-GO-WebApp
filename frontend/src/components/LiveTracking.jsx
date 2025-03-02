import React, { useState, useEffect, useCallback } from 'react';
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100%',
};

const defaultCenter = {
    lat: -3.745, // Default center in case geolocation fails
    lng: -38.523,
};

const LiveTracking = () => {
    const [currentPosition, setCurrentPosition] = useState(defaultCenter);
    const [error, setError] = useState(null);
    const [map, setMap] = useState(null); // Store the map instance

    // Update the map center when currentPosition changes
    useEffect(() => {
        if (map && currentPosition) {
            map.panTo(currentPosition); // Move the map to the new location
        }
    }, [currentPosition, map]);

    useEffect(() => {
        if (!navigator.geolocation) {
            setError('Geolocation is not supported by your browser.');
            return;
        }

        const handleGeolocationError = (err) => {
            switch (err.code) {
                case err.PERMISSION_DENIED:
                    setError('User denied the request for Geolocation.');
                    break;
                case err.POSITION_UNAVAILABLE:
                    setError('Location information is unavailable.');
                    break;
                case err.TIMEOUT:
                    setError('The request to get user location timed out.');
                    break;
                default:
                    setError('An unknown error occurred.');
                    break;
            }
        };

        // Get the user's current position initially
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setCurrentPosition({ lat: latitude, lng: longitude });
            },
            handleGeolocationError
        );

        // Watch for position changes in real-time
        const watchId = navigator.geolocation.watchPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setCurrentPosition({ lat: latitude, lng: longitude });
            },
            handleGeolocationError,
            {
                enableHighAccuracy: false, // Set to false for testing
                timeout: 5000, // Maximum time to wait for a position
                maximumAge: 0, // Do not use cached positions
            }
        );

        // Cleanup the watchPosition on component unmount
        return () => navigator.geolocation.clearWatch(watchId);
    }, []);

    // Store the map instance when the map loads
    const onMapLoad = useCallback((map) => {
        setMap(map);
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={currentPosition}
                zoom={15}
                onLoad={onMapLoad} // Callback when the map loads
            >
                <Marker position={currentPosition} />
            </GoogleMap>
        </LoadScript>
    );
};

export default LiveTracking;