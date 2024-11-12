import React from 'react';

const Seat = ({ seatIndex, isOccupied, isSelected, toggleSeat }) => {
  return (
    <div
      className={`seat ${isOccupied ? 'occupied' : ''} ${isSelected ? 'selected' : ''}`}
      onClick={() => !isOccupied && toggleSeat(seatIndex)}
    ></div>
  );
};

export default Seat;
