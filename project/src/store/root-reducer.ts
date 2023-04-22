import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { userProcess } from './user-process/user-process';
import { appProcess } from './app-process/app-process';
import { filmProcess } from './film-porcess/film-process';

export const rootReducer = combineReducers({
  [NameSpace.USER]: userProcess.reducer,
  [NameSpace.APP]: appProcess.reducer,
  [NameSpace.FILM]: filmProcess.reducer
});
