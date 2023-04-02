import { createAction } from '@reduxjs/toolkit';
import { Film, Films } from '../types/film';
import { AuthorizationStatus } from '../const';
import { User } from '../types/user';
import { Reviews } from '../types/review';

export const changeGenre = createAction<{ genre: string }>('changeGenre');
export const changeFilms = createAction<Films>('changeFilms');
export const changeAuthorizationStatus = createAction<AuthorizationStatus>('changeAuthorizationStatus');
export const redirectToRoute = createAction<string>('redirectToRoute');
export const changeUser = createAction<User>('changeUser');
export const changeFilm = createAction<Film | null>('changeFilm');
export const changeSimilarFilms = createAction<Films>('changeSimilarFilms');
export const changeReviews = createAction<Reviews>('changeReviews');
