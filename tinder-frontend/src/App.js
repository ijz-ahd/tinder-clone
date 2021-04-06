import React from "react";
import Header from "./components/Header";
import TinderCards from "./components/TinderCards";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Header  */}
      <Header />
      {/* Cards  */}
      <TinderCards />
      {/* Buttons  */}
      <Footer />
    </div>
  );
}

export default App;
