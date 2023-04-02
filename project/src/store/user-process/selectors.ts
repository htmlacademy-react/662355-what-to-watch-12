import { AuthorizationStatus, NameSpace } from '../../const';
import { State } from '../../types/store';
import { User } from '../../types/user';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.USER].authorizationStatus;
export const getAuthCheckedStatus = (state: State): boolean => state[NameSpace.USER].authorizationStatus !== AuthorizationStatus.UNKNOWN;
export const getUser = (state: State): User => state[NameSpace.USER].user;
