import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Film, Films } from '../types/film';
import { AppDispatch, State } from '../types/store';

export const useFilmByParamId = (films: Films) => {
  const { id } = useParams();
  let film: Film | undefined;
  if (id) {
    film = films.find((filmElem) => filmElem.id === +id);
  }
  return film;
};

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;

export const useAppDispatch = () => useDispatch<AppDispatch>();
