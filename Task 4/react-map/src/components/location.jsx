import React from 'react';
import { useState } from 'react';
import { useMapEvents } from 'react-leaflet';
import {Marker, Popup} from 'react-leaflet'
import L from 'leaflet'

const LocationMarker = () => {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click() {
    //   map.locate();
    setPosition([24.899674, 67.206464])
    map.flyTo(position, map.getZoom());
    }
    // locationfound(e) {
    //   setPosition(e.latlng);
    //   map.flyTo(e.latlng, map.getZoom());
    // },
  });
  const icon = new L.Icon({
    iconUrl: './images/home.png',
    iconSize: [35, 35]
  })
  return position === null ? null : (
    <Marker position={position} icon={icon}>
      <Popup>Home</Popup>
    </Marker>
  );
};

export default LocationMarker;
