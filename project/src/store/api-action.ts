import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppThunk } from '../types/store';
import { changeAuthorizationStatus, changeFilms, changeUser, redirectToRoute } from './action';
import { Films } from '../types/film';
import { ApiRoute, AuthorizationStatus } from '../const';
import { AuthData } from '../types/auth';
import { User } from '../types/user';
import { dropToken, saveToken } from '../services/token';

export const fetchFilms = createAsyncThunk<void, undefined, AppThunk>(
  'fetchFilms',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Films>(ApiRoute.FILMS);
    dispatch(changeFilms(data));
  },
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
