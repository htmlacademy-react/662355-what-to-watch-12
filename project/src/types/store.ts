import { AxiosInstance } from 'axios';
import { store } from '../store';
import { AuthorizationStatus } from '../const';
import { User } from './user';
import { Film, Films } from './film';
import { Reviews } from './review';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  user: User;
};

export type AppProcess = {
  films: Films;
  promoFilm: Film | null;
  genre: string;
}

export type FilmProcess = {
  film: Film | null;
  isLoadingFilm: boolean;
  similarFilms: Films;
  reviews: Reviews;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
