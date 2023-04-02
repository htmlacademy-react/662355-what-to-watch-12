import ReviewCard from '../review/review';
import { useFilmContext } from '../../hooks';

export default function Reviews(): JSX.Element {

  const { reviews } = useFilmContext();

  const len = reviews.length;
  const column = (start: number, end: number) => reviews.slice(start, end).map((review) => <ReviewCard key={review.id} review={review} />);
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {column(len / 2, len)}
      </div>
      <div className="film-card__reviews-col">
        {column(0, len / 2)}
      </div>
    </div>
  );
}
