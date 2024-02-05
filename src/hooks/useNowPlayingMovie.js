import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/constans";
import { addNowplayingMovie } from "../utils/redux/movieSlice";
import axios from "axios";

const useNowPlayingMovie = () => {
  const dispatch = useDispatch();
  const getMoviesNowPlaying = async () => {
    const { data } = await axios(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      options
    );
    dispatch(addNowplayingMovie(data.results));
    // console.log(data.results);
  };
  useEffect(() => {
    getMoviesNowPlaying();
  }, []);
};

export default useNowPlayingMovie;
