import { createAction } from '@reduxjs/toolkit';
import { Films } from '../types/film';

export const changeGenre = createAction<{ genre: string }>('changeGenre');
export const changeFilms = createAction<{ films: Films }>('changeFilms');
