import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AppProcess } from '../../types/store';
import { NameSpace } from '../../const';
import { fetchFilms } from '../api-action';

const initialState: AppProcess = {
  films: [],
  genre: 'All genres',
};

export const appProcess = createSlice({
  name: NameSpace.APP,
  initialState,
  reducers: {
    changeGenre: (state, action: PayloadAction<string>) => {
      state.genre = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilms.fulfilled, (state, action) => {
        state.films = action.payload;
      })
      .addCase(fetchFilms.rejected, (state) => {
        state.films = [];
      });
  },
});

export const { changeGenre } = appProcess.actions;
