import { createReducer } from '@reduxjs/toolkit';
import { Films } from '../types/film';
import { changeAuthorizationStatus, changeFilms, changeGenre, changeUser, changeLoading } from './action';
import { AuthorizationStatus } from '../const';
import { User } from '../types/user';

const initialState = {
  genre: 'All genres',
  films: [] as Films,
  isLoading: false,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  user: {} as User,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload.genre;
    })
    .addCase(changeFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(changeLoading, (state, action) => {
      state.isLoading = action.payload;
    })
    .addCase(changeAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(changeUser, (state, action) => {
      state.user = action.payload;
    });
});

export { reducer };
