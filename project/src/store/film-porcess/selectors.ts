import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { State } from '../../types/store';

const rootState = (state: State) => state[NameSpace.FILM];

export const getFilm = createSelector(rootState, (state) => state.film);
export const isLoadingFilm = createSelector(rootState, (state) => state.isLoadingFilm);
export const getSimilarFilms = createSelector(rootState, (state) => state.similarFilms);
export const getReviews = createSelector(rootState, (state) => state.reviews);
