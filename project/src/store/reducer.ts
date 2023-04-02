import { createReducer } from '@reduxjs/toolkit';
import { Films } from '../types/film';
import { changeFilms, changeGenre, loadingFilmsFinished } from './action';

const initialState = {
  genre: 'All genres',
  films: [] as Films,
  isLoadingFilms: true,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload.genre;
    })
    .addCase(changeFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(loadingFilmsFinished, (state) => {
      state.isLoadingFilms = false;
    });
});

export { reducer };
