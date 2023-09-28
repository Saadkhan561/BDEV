import React from 'react';
import { useState, useEffect } from 'react';
import {Marker, Popup, useMap} from 'react-leaflet'
import L from 'leaflet'
import { locations } from '../locations';

const LocationMarker = ({id, position}) => {
  const [new_position, setPosition] = useState(position);
  const [new_id, setId] = useState(id)
  const [img, setImg] = useState(locations[0].img)
  const map = useMap()
  useEffect(() => {
    setPosition(position)
    setId(id)
    setImg(locations[new_id].img)
  }, [position, id])
  map.flyTo(new_position, map.getZoom())
  const icon = new L.Icon({
    iconUrl: `./images/${img}.png`,
    iconSize: [35, 35]
  })
  return new_position === null ? null : (
    <Marker position={new_position} icon={icon}>
      <Popup className='text-xl text-bold'>{locations[new_id].popup}</Popup>
    </Marker>
  );
};

export default LocationMarker;
