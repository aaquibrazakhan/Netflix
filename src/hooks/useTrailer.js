import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/constans";
import { addTrailer } from "../utils/redux/movieSlice";

const useTrailer = (movieId) => {
  const dispatch = useDispatch();

  const fetchVideo = async () => {
    const { data } = await axios(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      options
    );
    console.log(data);
    const filterVideo = data?.results?.filter((item) => item.type == "Trailer");
    const movie = filterVideo[0];
    console.log(movie);
    dispatch(addTrailer(movie));
  };

  useEffect(() => {
    fetchVideo();
  }, []);
}
export default useTrailer