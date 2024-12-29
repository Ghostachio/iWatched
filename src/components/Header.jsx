/* eslint-disable react/prop-types */
const Header = ({ inputField, handleInput }) => {
  return (
    <header className="flex justify-around p-3 bg-purple-700 text-white m-2 rounded-xl items-center mt-6">
      <span className="font-bold text-2xl">iWatched Logo</span>
      <input
        type="text"
        className="w-96 rounded-md text-white p-1 bg-slate-400 opacity-50 placeholder-white placeholder-opacity-100 pl-3"
        placeholder="Search for a movie"
        onChange={handleInput}
        value={inputField}
      />
      <span className="font-semibold text-xl">Found x to results</span>
    </header>
  );
};

export default Header;
