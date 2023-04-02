import { NameSpace } from '../../const';
import { Film, Films } from '../../types/film';
import { Reviews } from '../../types/review';
import { State } from '../../types/store';

export const getFilm = (state: State): Film | null => state[NameSpace.FILM].film;
export const isLoadingFilm = (state: State): boolean => state[NameSpace.FILM].isLoadingFilm;
export const getSimilarFilms = (state: State): Films => state[NameSpace.FILM].similarFilms;
export const getReviews = (state: State): Reviews => state[NameSpace.FILM].reviews;
