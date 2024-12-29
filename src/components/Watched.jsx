/* eslint-disable react/prop-types */
const Watched = ({ status, changestatus }) => {
  return (
    <section className="bg-slate-600  w-10/12 h-full rounded-xl p-4">
      <div className="flex justify-end items-center">
        <button
          className="rounded-full bg-slate-500 w-6 h-6 "
          onClick={changestatus}
        >
          {status ? "➕" : "➖"}
        </button>
      </div>
      Watched Component
    </section>
  );
};

export default Watched;
