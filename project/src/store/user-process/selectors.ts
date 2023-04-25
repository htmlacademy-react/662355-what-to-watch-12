import { createSelector } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../const';
import { State } from '../../types/store';

const rootState = (state: State) => state[NameSpace.USER];

export const getAuthorizationStatus = createSelector(rootState, (state) => state.authorizationStatus);
export const getAuthCheckedStatus = createSelector(rootState, (state) => state.authorizationStatus !== AuthorizationStatus.UNKNOWN);
export const isAuthorized = createSelector(rootState, (state) => state.authorizationStatus === AuthorizationStatus.AUTH);
export const getUser = createSelector(rootState, (state) => state.user);
