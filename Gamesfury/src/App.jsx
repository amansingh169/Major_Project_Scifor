import { useState } from "react";

import Navbar from "./components/Navbar";
import ThemeSelector from "./components/ThemeSelector";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container my-5">
        <Navbar />
        <ThemeSelector />
      </div>
    </>
  );
}

export default App;
