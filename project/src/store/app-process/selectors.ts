import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { State } from '../../types/store';

const rootState = (state: State) => state[NameSpace.APP];

export const getFilms = createSelector(rootState, (state) => state.films);
export const getGenre = createSelector(rootState, (state) => state.genre);
export const getFavoriteFilms = createSelector(rootState, (state) => state.isFavorite);
