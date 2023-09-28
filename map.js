// Map.js
import React from "react";

const Map = ({ address }) => {
  return (
    <div className="map">
      <iframe
        title="Profile Location"
        width="100%"
        height="300"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${address}`}
      ></iframe>
    </div>
  );
};

export default Map;
