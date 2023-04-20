import { useFilmContext } from '../../hooks';


export default function Overview(): JSX.Element {
  const { film } = useFilmContext();

  function convertRating(rating: number): string {
    if (rating <= 3) {
      return 'Bad';
    }
    else if (rating <= 5) {
      return 'Normal';
    }
    else if (rating <= 8) {
      return 'Good';
    }
    else if (rating < 10) {
      return 'Very Good';
    }
    else {
      return 'Awesome';
    }
  }

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{convertRating(film.rating)}</span>
          <span className="film-rating__count">{film.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film.description}</p>
        <p className="film-card__director"><strong>Director: {film.director}</strong></p>
        <p className="film-card__starring"><strong>Starring: {film.starring.join(', ')}</strong></p>
      </div>
    </>
  );
}
