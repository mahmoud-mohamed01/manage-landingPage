import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
function App() {
  return (
    <main>
      <header>
        <Navbar></Navbar>
        <Hero></Hero>
      </header>
      <About></About>
    </main>
  );
}

export default App;
