import { useEffect } from 'react';

const MovieSelect = ({ movies, ticketPrice, setTicketPrice }) => {
  useEffect(() => {
    if (movies.length > 0) {
      setTicketPrice(movies[0].Price);
    }
  }, [movies, setTicketPrice]);

  return (
    <div className="movie-container">
      <label htmlFor="movie">Pick a movie:</label>
      <select name="movie" id="movie" onChange={(e) => setTicketPrice(+e.target.value)}>
      {movies.map((movie, index) => (
        <option key={index} value={movie.Price}>
          {movie.Title} ({movie.Price} kr)
        </option>
      ))}
      </select>
  </div>
  );
};

export default MovieSelect;