import axios from "axios";
import { Header, MainContainer, SecondContainer } from "./index";
import { useEffect } from "react";
import { options } from "../utils/constans";
import { useDispatch } from "react-redux";
import { addNowplayingMovie } from "../utils/redux/movieSlice";
import useNowPlayingMovie from "../hooks/useNowPlayingMovie";

const Browser = () => {
 useNowPlayingMovie()
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondContainer />

    </div>
  );
};

export default Browser;
