import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import MovieDetail from "./components/movie-Detail/movieDetail";
import MovieCard from "./components/movie-card/movieCard";
import PageNotFound from "./components/pageNotFound/pageNotFound";
const Routerss = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies:imdbID" element={<MovieDetail />} />
        <Route path="/movies:imdbID" element={<MovieCard />} />
        <Route element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default Routerss;
