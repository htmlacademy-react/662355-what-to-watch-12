import { createReducer } from '@reduxjs/toolkit';
import { Films } from '../types/film';
import { changeFilms, changeGenre } from './action';

const initialState = {
  genre: 'All genres',
  films: [] as Films
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload.genre;
    })
    .addCase(changeFilms, (state, action) => {
      state.films = action.payload.films;
    });
});

export { reducer };
