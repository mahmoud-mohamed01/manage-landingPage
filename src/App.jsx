import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Reviews from "./Components/Reviews/Reviews";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <main>
      <header>
        <Navbar></Navbar>
        <Hero></Hero>
      </header>
      <About></About>
      <Reviews></Reviews>
      <Footer></Footer>
    </main>
  );
}

export default App;
