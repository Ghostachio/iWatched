import { useState } from "react";
import Header from "./components/Header";
import Searched from "./components/Searched";
import Watched from "./components/Watched";

function App() {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <Header inputField={input} handleInput={handleInput} />
      <main className="flex justify-between gap-8 h-[650px] w-full pl-40 pr-40 mt-6">
        <Searched />
        <Watched />
      </main>
    </div>
  );
}

export default App;
