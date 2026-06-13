import React from "react";
import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./Components/Movies";
import WatchList from "./Components/WatchList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/watchlist" element={<WatchList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
