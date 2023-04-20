import { ComponentType, useEffect } from 'react';
import { WithFilmProps } from '../../types/film';
import { useParams } from 'react-router-dom';
import Loading from '../../pages/loading/loading';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFilm } from '../../store/api-action';

export const withFilmLoading = (Component: ComponentType<WithFilmProps>) =>
  function FilmLoading() {
    const film = useAppSelector((state) => state.film);
    const { id } = useParams();
    const dispatch = useAppDispatch();

    useEffect(() => {
      if (id) {
        dispatch(fetchFilm(parseInt(id, 10)));
      }
    }, [id]);

    return film === null ? <Loading /> : <Component film={film} />;
  };
