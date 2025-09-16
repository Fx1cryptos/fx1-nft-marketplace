import React from "react";
import Banner from "./components/Banner.jsx";
import TokenDisplay from "./components/TokenDisplay.jsx";
import MintButton from "./components/MintButton.jsx";

function App() {
  return (
    <div className="app">
      <Banner />
      <TokenDisplay />
      <MintButton />
    </div>
  );
}

export default App;
