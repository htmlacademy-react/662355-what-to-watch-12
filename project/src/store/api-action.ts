import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/store';
import { changeFilms, loadingFilmsFinished } from './action';
import { Films } from '../types/film';
import { ApiRoute } from '../const';

export const fetchFilms = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchFilms',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Films>(ApiRoute.FILMS);
    dispatch(changeFilms(data));
    dispatch(loadingFilmsFinished());
  },
);
