/* eslint-disable react/prop-types */

import SearchedMovies from "./SearchedMovies";

const Searched = ({ data, status, changestatus }) => {
  return (
    <section className="bg-slate-600 w-10/12 rounded-xl p-10 ">
      <div className="flex justify-end items-center">
        <button
          className="rounded-full bg-slate-500 w-6 h-6 "
          onClick={changestatus}
        >
          {status ? "➕" : "➖"}
        </button>
      </div>
      <div className="flex flex-col gap-4">
        {data?.length > 0 ? (
          data.map((movie) => (
            <SearchedMovies movie={movie} key={movie.imdbID} />
          ))
        ) : (
          <h1 className="text-white font-semibold text-xl p-3">
            Please search for a movie
          </h1>
        )}
      </div>
    </section>
  );
};

export default Searched;
