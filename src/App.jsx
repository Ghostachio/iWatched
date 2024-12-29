import { useState } from "react";
import { useEffect } from "react";
import Header from "./components/Header";
import Searched from "./components/Searched";
import Watched from "./components/Watched";

const APIKEY = "f459ee4b";

function App() {
  const [input, setInput] = useState("");
  const [searched, setSearched] = useState([]);
  const [searchClose, setSearchClose] = useState(false);
  const [watchedClose, setWatchedClose] = useState(false);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${APIKEY}&s=${input}&type=movie`
      );
      const data = await response.json();
      setSearched(data.Search);
    };

    if (input) {
      fetchData();
    }
  }, [input]);

  return (
    <div>
      <Header
        inputField={input}
        handleInput={handleInput}
        lenght={!searched ? null : searched}
      />
      <main className="flex justify-between gap-8 h-fit w-full pl-40 pr-40 mt-6">
        <Searched
          data={searched}
          changestatus={() => setSearchClose(!searchClose)}
          status={searchClose}
        />
        <Watched
          changestatus={() => setWatchedClose(!watchedClose)}
          status={watchedClose}
        />
      </main>
    </div>
  );
}

export default App;
