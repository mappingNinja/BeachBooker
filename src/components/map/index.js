import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

export default function Map(props) {
    const {longitude, latitude, sx} = props;

  return (
      <MapContainer style={sx} center={[longitude, latitude]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[longitude, latitude]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
  );
}