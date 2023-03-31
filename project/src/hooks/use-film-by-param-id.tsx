import { useParams } from 'react-router-dom';
import { Film, Films } from '../types/film';

export const useFilmByParamId = (films: Films) => {
  const { id } = useParams();
  let film: Film | undefined;
  if (id) {
    film = films.find((filmElem) => filmElem.id === +id);
  }
  return film;
};
