import React from "react";
import PropTypes from "prop-types";

const RoomCard = ({ title, imageUrls }) => {
  return (
    <div className="room-card">
      <h3>{title}</h3>
      <div className="image-container">
        {imageUrls.map((url) => (
          <img src={url} alt={title} key={url} />
        ))}
      </div>
    </div>
  );
};

RoomCard.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RoomCard;
