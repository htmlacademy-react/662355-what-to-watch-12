export const ALL_GENRES = 'All genres';

export enum TypeOfTab {
  OVERVIEW = 'overview',
  REVIEWS = 'reviews',
  DETAILS = 'details'
}

export const FILMS_COUNT_STEP = 8;

export enum ApiRoute {
  FILMS = '/films',
  LOGIN = '/login',
  LOGOUT = '/logout',
  COMMENTS = '/comments',
  FAVORITE = '/favorite',
  PROMO = '/promo',
}

export enum AuthorizationStatus {
  AUTH = 'AUTH',
  NO_AUTH = 'NO_AUTH',
  UNKNOWN = 'UNKNOWN',
}

export const COUNT_FILMS_IN_SIMILAR_LIST = 4;

export enum NameSpace {
  USER = 'user',
  APP = 'app',
  FILM = 'film',
}
