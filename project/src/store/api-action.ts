import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppThunk } from '../types/store';
import { changeAuthorizationStatus, changeFilms, changeSimilarFilms, changeUser, changeFilm, redirectToRoute, changeReviews } from './action';
import { Film, Films } from '../types/film';
import { ApiRoute, AuthorizationStatus } from '../const';
import { AuthData } from '../types/auth';
import { User } from '../types/user';
import { dropToken, saveToken } from '../services/token';
import { ReviewData, Reviews } from '../types/review';

export const fetchFilms = createAsyncThunk<void, undefined, AppThunk>(
  'fetchFilms',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Films>(ApiRoute.FILMS);
    dispatch(changeFilms(data));
  },
);

export const fetchFilm = createAsyncThunk<void, number, AppThunk>(
  'fetchFilm',
  async (filmId, { dispatch, extra: api }) => {
    dispatch(changeFilm(null));
    const { data } = await api.get<Film>(`${ApiRoute.FILMS}/${filmId}`);
    dispatch(changeFilm(data));
  }
);

export const login = createAsyncThunk<void, undefined, AppThunk>(
  'login',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get(ApiRoute.LOGIN);
      dispatch(changeAuthorizationStatus(AuthorizationStatus.AUTH));
    } catch (err) {
      dispatch(changeAuthorizationStatus(AuthorizationStatus.NO_AUTH));
    }
  }
);

export const logout = createAsyncThunk<void, undefined, AppThunk>(
  'logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(ApiRoute.LOGOUT);
    dropToken();
    dispatch(changeAuthorizationStatus(AuthorizationStatus.NO_AUTH));
  }
);

export const authorize = createAsyncThunk<void, AuthData, AppThunk>(
  'authorize',
  async (authorizationData, { dispatch, extra: api }) => {
    const { data } = await api.post<User>(ApiRoute.LOGIN, authorizationData);
    saveToken(data.token);
    dispatch(changeUser(data));
    dispatch(changeAuthorizationStatus(AuthorizationStatus.AUTH));
    dispatch(redirectToRoute('/'));
  },
);

export const fetchSimilarFilms = createAsyncThunk<void, number, AppThunk>(
  'fetchSimilarFilms',
  async (filmId, { dispatch, extra: api }) => {
    dispatch(changeSimilarFilms([]));
    const { data } = await api.get<Films>(`${ApiRoute.FILMS}/${filmId}/similar`);
    dispatch(changeSimilarFilms(data));
  }
);

export const fetchReviews = createAsyncThunk<void, number, AppThunk>(
  'fetchReviews',
  async (filmId, { dispatch, extra: api }) => {
    dispatch(changeReviews([]));
    const { data } = await api.get<Reviews>(`${ApiRoute.COMMENTS}/${filmId}`);
    dispatch(changeReviews(data));
  }
);

type SaveReviewType = {
  reviewData: ReviewData;
  onFinish: () => void;
}

export const saveReview = createAsyncThunk<void, SaveReviewType, AppThunk>(
  'saveReview',
  async ({ reviewData: { filmId, review }, onFinish }, { dispatch, extra: api }) => {
    try {
      await api.post(`${ApiRoute.COMMENTS}/${filmId}`, review);
      dispatch(redirectToRoute(`${ApiRoute.FILMS}/${filmId}`));
    } finally {
      onFinish();
    }
  }
);
