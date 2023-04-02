import { NameSpace } from '../../const';
import { Films } from '../../types/film';
import { State } from '../../types/store';

export const getFilms = (state: State): Films => state[NameSpace.APP].films;
export const getGenre = (state: State): string => state[NameSpace.APP].genre;
