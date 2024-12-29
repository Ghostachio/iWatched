/* eslint-disable react/prop-types */
const SearchedMovies = ({ movie }) => {
  return (
    <div className="flex ">
      <img
        src={movie.Poster}
        alt="Movie Poster"
        className=" h-46 rounded-md object-contain w-2/4"
      />
      <div className="flex flex-col justify-center items-center text-center w-2/4">
        <h1 className="text-white font-medium bg-purple-800 p-2 ml-4 rounded-md mb-2 text-wrap">
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
