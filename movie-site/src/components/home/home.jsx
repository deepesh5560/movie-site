import React, { useEffect } from "react";
import MovieListing from "../movie-listing/movieListing";
import movieApi from "../../common/api/movieApi";
import { APIKey } from "../../common/api/movieApiKey";
import Header from "../header/header";
import Footer from "../footer/footer";

const Home = () => {
  useEffect(() => {
    const movieText = "harry";
    const fetchMovies = async () => {
      const resp = await movieApi
        .get(`?apikey=${APIKey}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log(err);
        });

      console.log("resp", resp);
    };

    fetchMovies();
  }, []);
  return (
    <div>
      <Header />
      <div className="banner-img"></div>
      <MovieListing />

      <Footer />
    </div>
  );
};

export default Home;
