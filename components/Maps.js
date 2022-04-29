import { getCenter } from "geolib";
import React, { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";

const Maps = (props) => {
  const { searchResults } = props;
  const [selectedLocation, setSelectedLocation] = useState({});

  // Transform the search Results object into {latitiude and longitude}
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 10,
  });

  return (
    <Map
      mapStyle='mapbox://styles/kushhhagrakrish/cl0y60qk600eo14md5l224i5f'
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      onMove={(evt) => setViewport(evt.viewport)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role='img'
              onClick={() => setSelectedLocation(result)}
              className='text-2xl cursor-pointer animate-bounce'
              aria-label='push-pin'
            >
              📌
            </p>
          </Marker>
        </div>
      ))}
    </Map>
  );
};

export default Maps;
