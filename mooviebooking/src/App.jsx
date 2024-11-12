import { useState, useEffect } from 'react';
import SeatRow from './components/SeatRow.jsx';
import MovieSelect from './components/MovieSelect.jsx';
import Form from './components/Form.jsx';

const App = () => {
  const [seats, setSeats] = useState([]);
  const [ticketPrice, setTicketPrice] = useState(0);
  const [movies, setMovies] = useState([]);
  const occupiedSeats = [11, 12, 22, 23, 35, 36, 44, 45, 46];
  const [showForm, setShowForm] = useState(false);


  useEffect(() => {
    generateSeats(6, 8);
    fetchMovies();
  }, []);

  const generateSeats = (rows, seatsPerRow) => {
    const generatedSeats = [];
    let seatIndex = 0;

    for (let i = 0; i < rows; i++) {
      const rowSeats = [];
      for (let j = 0; j < seatsPerRow; j++) {
        rowSeats.push({
          index: seatIndex,
          occupied: occupiedSeats.includes(seatIndex),
          selected: false,
        });
        seatIndex++;
      }
      generatedSeats.push(rowSeats);
    }

    setSeats(generatedSeats);
  };

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        'https://gist.githubusercontent.com/aspcodenet/32a21ce9d8b8ccf19108a8a02883e9bb/raw/785f9bcb1527cb01e182d3fe40ffafd6fd00dac9/movies.json'
      );
      const moviesData = await response.json();
      setMovies(moviesData);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };
  useEffect(() => {
    setSeats((previousSeats) =>
      previousSeats.map((row) =>
        row.map((seat) => ({
          ...seat,
          selected: false,
        }))
      )
    );
  }, [ticketPrice]);


  const toggleSeat = (seatIndex) => {
    setSeats((prevSeats) =>
      prevSeats.map((row) =>
        row.map((seat) =>
          seat.index === seatIndex ? { ...seat, selected: !seat.selected } : seat
        )
      )
    );
  };

  const selectedSeatsCount = seats.flat().filter((seat) => seat.selected).length;
  const totalCost = selectedSeatsCount * ticketPrice;

  const buttonForm = () => setShowForm(!showForm); 

  return (
    <>
      <div>
        <MovieSelect movies={movies} ticketPrice={ticketPrice} setTicketPrice={setTicketPrice} />
        <div className="container">
          <ul className="showcase">
            <li>
              <div className="seat"></div>
              <small>N/A</small>
            </li>
            <li>
              <div className="seat selected"></div>
              <small>Selected</small>
            </li>
            <li>
              <div className="seat occupied"></div>
              <small>Occupied</small>
            </li>
          </ul>
          <div className="container">
            <div className="screen"></div>
            <div className='containerSeats'>
              {seats.map((rowSeats, rowIndex) => (
                <SeatRow key={rowIndex} rowSeats={rowSeats} toggleSeat={toggleSeat} />
              ))}
            </div>
          </div>
        </div>
        <p className='text'>
          You have selected <span id="count">{selectedSeatsCount}</span> seats for a price of $ <span id="total">{totalCost}</span>
        </p>
      </div>

      <button onClick={buttonForm}>Book here!</button>
      <br />
      <br />
      {showForm && (
          <div className="content">
            <button className="close-button" onClick={buttonForm}>&times;</button>
            <Form />
          </div>
      )}
    </>
  );
};

export default App;
