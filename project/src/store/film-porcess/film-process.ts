import { createSlice } from '@reduxjs/toolkit';
import { FilmProcess } from '../../types/store';
import { NameSpace } from '../../const';
import { fetchFilm, fetchReviews, fetchSimilarFilms } from '../api-action';

const initialState: FilmProcess = {
  film: null,
  similarFilms: [],
  reviews: [],
  isLoadingFilm: false,
};

export const filmProcess = createSlice({
  name: NameSpace.FILM,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilm.fulfilled, (state, action) => {
        state.film = action.payload;
        state.isLoadingFilm = false;
      })
      .addCase(fetchFilm.rejected, (state) => {
        state.film = null;
      })
      .addCase(fetchFilm.pending, (state) => {
        state.isLoadingFilm = true;
      })
      .addCase(fetchSimilarFilms.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
      })
      .addCase(fetchSimilarFilms.rejected, (state) => {
        state.similarFilms = [];
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(fetchReviews.rejected, (state) => {
        state.reviews = [];
      });
  }
});
