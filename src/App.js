import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
import About from "./Components/About";
function App() {
  return (
    <div className="  bg-blue-100 border-b-2 border-bluemine min-h-screen">
      <Navbar />
      <Body />
      <About/>
    </div>
  );
}

export default App;
