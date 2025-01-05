/* eslint-disable react/prop-types */
const WatchedMovies = ({ movie, onDelete }) => {
  return (
    <div className="flex bg-slate-700 p-4 rounded-lg items-center">
      <img
        src={movie.Poster}
        alt="Movie Poster"
        className=" h-46 rounded-md object-contain w-1/4"
      />
      <div className="flex flex-col justify-center items-center text-center w-full ">
        <h1 className="text-white font-medium bg-purple-800 p-2 rounded-md mb-2 text-wrap w-3/4 ">
          {movie.Title}
        </h1>
        <h2 className="text-white p-2 rounded-md mb-2 text-wrap ">
          {movie.Year}
        </h2>
        <button
          className="bg-red-500 p-2 rounded-md font-semibold text-red-100"
          onClick={() => onDelete(movie.imdbID)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default WatchedMovies;
