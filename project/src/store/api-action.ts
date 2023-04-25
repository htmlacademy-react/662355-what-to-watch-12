import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppThunk } from '../types/store';
import { redirectToRoute } from './action';
import { Film, Films } from '../types/film';
import { ApiRoute } from '../const';
import { AuthData } from '../types/auth';
import { User } from '../types/user';
import { dropToken, saveToken } from '../services/token';
import { ReviewData, Reviews } from '../types/review';

export const fetchFilms = createAsyncThunk<Films, undefined, AppThunk>(
  'app/fetchFilms',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Films>(ApiRoute.FILMS);
    return data;
  },
);

export const fetchFilm = createAsyncThunk<Film, number, AppThunk>(
  'film/fetchFilm',
  async (filmId, { extra: api }) => {
    const { data } = await api.get<Film>(`${ApiRoute.FILMS}/${filmId}`);
    return data;
  }
);

export const login = createAsyncThunk<void, undefined, AppThunk>(
  'user/login',
  async (_arg, { dispatch, extra: api }) => {
    await api.get(ApiRoute.LOGIN);
    dispatch(fetchFavoriteFilms());
  }
);

export const logout = createAsyncThunk<void, undefined, AppThunk>(
  'user/logout',
  async (_arg, { extra: api }) => {
    await api.delete(ApiRoute.LOGOUT);
    dropToken();
  }
);

export const authorize = createAsyncThunk<User, AuthData, AppThunk>(
  'user/authorize',
  async (authorizationData, { dispatch, extra: api }) => {
    const { data } = await api.post<User>(ApiRoute.LOGIN, authorizationData);
    saveToken(data.token);
    dispatch(fetchFavoriteFilms());
    dispatch(redirectToRoute('/'));
    return data;
  },
);

export const fetchSimilarFilms = createAsyncThunk<Films, number, AppThunk>(
  'film/fetchSimilarFilms',
  async (filmId, { extra: api }) => {
    const { data } = await api.get<Films>(`${ApiRoute.FILMS}/${filmId}/similar`);
    return data;
  }
);

export const fetchReviews = createAsyncThunk<Reviews, number, AppThunk>(
  'film/fetchReviews',
  async (filmId, { extra: api }) => {
    const { data } = await api.get<Reviews>(`${ApiRoute.COMMENTS}/${filmId}`);
    return data;
  }
);

type SaveReviewType = {
  reviewData: ReviewData;
  onFinish: () => void;
}

export const saveReview = createAsyncThunk<void, SaveReviewType, AppThunk>(
  'film/saveReview',
  async ({ reviewData: { filmId, review }, onFinish }, { dispatch, extra: api }) => {
    try {
      await api.post(`${ApiRoute.COMMENTS}/${filmId}`, review);
      dispatch(redirectToRoute(`${ApiRoute.FILMS}/${filmId}`));
    } finally {
      onFinish();
    }
  }
);

export const fetchFavoriteFilms = createAsyncThunk<Films, undefined, AppThunk>(
  'app/fetchFavoriteFilms',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Films>(ApiRoute.FAVORITE);
    return data;
  }
);

export const addFavoriteFilm = createAsyncThunk<Film, { filmId: number; status: number }, AppThunk>(
  'app/addFavoriteFilm',
  async ({ filmId, status }, { extra: api }) => {
    const { data } = await api.post<Film>(`${ApiRoute.FAVORITE}/${filmId}/${status}`);
    return data;
  }
);

export const fetchPromo = createAsyncThunk<Film, undefined, AppThunk>(
  'app/fetchPromo',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Film>(ApiRoute.PROMO);
    return data;
  }
);
