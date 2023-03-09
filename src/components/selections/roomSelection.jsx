import React from "react";
import RoomCard from "../cards/roomCard";

const RoomSelection = () => {
  const rooms = [
    {
      title: "Комната №1",
      imageUrls: [
        "https://example.com/room1-image1.jpg",
        "https://example.com/room1-image2.jpg",
        "https://example.com/room1-image3.jpg",
      ],
    },
    {
      title: "Комната №2",
      imageUrls: [
        "https://example.com/room2-image1.jpg",
        "https://example.com/room2-image2.jpg",
        "https://example.com/room2-image3.jpg",
      ],
    },
    {
      title: "Комната №3",
      imageUrls: [
        "https://example.com/room3-image1.jpg",
        "https://example.com/room3-image2.jpg",
        "https://example.com/room3-image3.jpg",
      ],
    },
  ];

  return (
    <div className="room-selection">
      {rooms.map((room) => (
        <RoomCard
          key={room.title}
          title={room.title}
          imageUrls={room.imageUrls}
        />
      ))}
    </div>
  );
};

export default RoomSelection;
