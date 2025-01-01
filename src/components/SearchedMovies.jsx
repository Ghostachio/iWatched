/* eslint-disable react/prop-types */
const SearchedMovies = ({ movie, onHandleWatched }) => {
  return (
    <div
      className="flex bg-slate-900 p-4 rounded-lg hover:bg-slate-800 hover:cursor-pointer"
      onClick={() => onHandleWatched(movie)}
    >
      <img
        src={movie.Poster}
        alt="Movie Poster"
        className=" h-auto rounded-3xl object-scale-down w-1/4 "
      />
      <div className="flex flex-col justify-center items-center w-3/4 pr-4 pl-4">
        <h1 className="text-white font-medium bg-purple-800 p-2 rounded-md mb-2 text-wrap w-full text-center">
          {movie.Title}
        </h1>
        <h2 className="text-white p-2 ml-4 rounded-md mb-2 text-wrap">
          {movie.Year}
        </h2>
        <p>{movie.Actors}</p>
      </div>
    </div>
  );
};

export default SearchedMovies;
