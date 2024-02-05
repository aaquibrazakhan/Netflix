import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nowPlayingMovie: {},
  trailer: {},
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addNowplayingMovie: (state, action) => {
      state.nowPlayingMovie = action.payload;
    },
    addTrailer: (state, action) => {
      state.trailer = action.payload;
    },
  },
});

export const { addNowplayingMovie,addTrailer } = movieSlice.actions;

export default movieSlice.reducer;
