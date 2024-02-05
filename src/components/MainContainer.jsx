import React from 'react'
import {Title, VideoPlayer} from './index'
import { useSelector } from 'react-redux'
const MainContainer = () => {

    const store = useSelector(store => store.movie?.nowPlayingMovie)
    const movies = store[Math.ceil(Math.random() * 20)]
    if(!movies) return;
    // console.log(movies)
    const {original_title , overview ,id} = movies

  return (
    <div>
        <Title title={original_title} desc={overview}/> 
        <VideoPlayer movieId={id} />
    </div>
  )
}

export default MainContainer