/* eslint-disable react/prop-types */
import WatchedMovies from "./WatchedMovies";

const Watched = ({ status, changestatus, data }) => {
  return (
    <section className="bg-slate-600  w-10/12 h-full rounded-xl p-10 ">
      <div className="flex justify-end items-center">
        <button
          className="rounded-full bg-slate-500 w-6 h-6 "
          onClick={changestatus}
        >
          {status ? "➕" : "➖"}
        </button>
      </div>
      {status ? (
        <div className="flex flex-col gap-4 mt-10">
          {data.map((movie) => (
            <WatchedMovies key={movie} movie={movie} />
          ))}
        </div>
      ) : null}
    </section>
  );
};

export default Watched;
