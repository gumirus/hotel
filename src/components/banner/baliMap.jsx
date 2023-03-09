/*
import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import PropTypes from "prop-types";

function BaliMap() {
  const [center, setCenter] = useState({ lat: -8.4095189, lng: 115.188916 });
  const [zoom, setZoom] = useState(11);

  useEffect(() => {
    // Load the Google Maps API script
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`;
    script.async = true;
    document.body.appendChild(script);

    // Remove the script tag on unmount to avoid memory leaks
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  BaliMap.propTypes = {
    // PropTypes for center prop
    center: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
    }),

    // PropTypes for zoom prop
    zoom: PropTypes.number,
  };

  return (
    <div style={{ height: "400px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {/* Add markers for interesting places in Bali */
//         <Marker lat={-8.4095189} lng={115.188916} name="Kuta Beach" />
//         <Marker lat={-8.3415277} lng={115.0902967} name="Ubud Palace" />
//         <Marker lat={-8.4090713} lng={115.1882263} name="Waterbom Bali" />
//       </GoogleMapReact>
//     </div>
//   );
// }

/*
function Marker({ name }) {
  return <div style={{ color: "red", fontSize: "16px" }}>{name}</div>;
}
Marker.propTypes = {
  // PropTypes for name prop
  name: PropTypes.string.isRequired,
  bootstrapURLKeys: PropTypes.shape({
    key: PropTypes.string.isRequired,
    language: PropTypes.string,
    region: PropTypes.string,
    libraries: PropTypes.string,
    client: PropTypes.string,
    v: PropTypes.string,
    channel: PropTypes.string,
    apiUrl: PropTypes.string,
    version: PropTypes.string,
    mapIds: PropTypes.string,
  }),
};

export default BaliMap;
*/
