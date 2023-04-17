import { createAction } from '@reduxjs/toolkit';
import { Films } from '../types/film';
import { AuthorizationStatus } from '../const';
import { User } from '../types/user';

export const changeGenre = createAction<{ genre: string }>('changeGenre');
export const changeFilms = createAction<Films>('changeFilms');
export const changeLoading = createAction<boolean>('changeLoading');
export const changeAuthorizationStatus = createAction<AuthorizationStatus>('changeAuthorizationStatus');
export const redirectToRoute = createAction<string>('redirectToRoute');
export const changeUser = createAction<User>('changeUser');
