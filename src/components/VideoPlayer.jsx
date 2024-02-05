import { options } from "../utils/constans";
import { useSelector } from "react-redux";
import useTrailer from "../hooks/useTrailer";

const VideoPlayer = ({ movieId }) => {
  const store = useSelector((store) => store?.movie?.trailer);
  // console.log(store?.key)
  useTrailer(movieId);
  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${store?.key}?autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
