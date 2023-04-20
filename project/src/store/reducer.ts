import { createReducer } from '@reduxjs/toolkit';
import { Films, Film } from '../types/film';
import { changeAuthorizationStatus, changeFilms, changeGenre, changeSimilarFilms, changeUser, changeFilm, changeReviews } from './action';
import { AuthorizationStatus } from '../const';
import { User } from '../types/user';
import { Reviews } from '../types/review';

const initialState = {
  genre: 'All genres',
  films: [] as Films,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  user: {} as User,
  film: null as Film | null,
  similarFilms: [] as Films,
  reviews: [] as Reviews,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload.genre;
    })
    .addCase(changeFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(changeAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(changeUser, (state, action) => {
      state.user = action.payload;
    })
    .addCase(changeFilm, (state, action) => {
      state.film = action.payload;
    })
    .addCase(changeSimilarFilms, (state, action) => {
      state.similarFilms = action.payload;
    })
    .addCase(changeReviews, (state, action) => {
      state.reviews = action.payload;
    });
});

export { reducer };
