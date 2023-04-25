import { ComponentType, useEffect } from 'react';
import { WithFilmProps } from '../types/film';
import { useParams } from 'react-router-dom';
import Loading from '../pages/loading/loading';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchFilm } from '../store/api-action';
import { getFilm, isLoadingFilm } from '../store/film-porcess/selectors';

export const withFilmLoading = (Component: ComponentType<WithFilmProps>) =>
  function FilmLoading() {
    const film = useAppSelector(getFilm);
    const isLoading = useAppSelector(isLoadingFilm);
    const { id } = useParams();
    const dispatch = useAppDispatch();

    useEffect(() => {
      if (id) {
        const filmId = parseInt(id, 10);
        dispatch(fetchFilm(filmId));
      }
    }, [id]);

    return isLoading || !film ? <Loading /> : <Component film={film} />;
  };
