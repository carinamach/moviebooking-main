import Seat from './Seat.jsx';

const SeatRow = ({ rowSeats, toggleSeat }) => {
  return (
    <div className="row">
      {rowSeats.map((seat, index) => (
        <Seat
          key={index}
          seatIndex={seat.index}
          isOccupied={seat.occupied}
          isSelected={seat.selected}
          toggleSeat={toggleSeat}
        />
      ))}
    </div>
  );
};

export default SeatRow;
