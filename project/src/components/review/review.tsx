
import dayjs from 'dayjs';
import { Review } from '../../types/review';

type ReviewProps = {
  review: Review;
}

export default function ReviewCard({ review }: ReviewProps): JSX.Element {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{review.user.name}</cite>
          <time className="review__date" dateTime={review.date.toLocaleDateString('en-CA')}>{dayjs(review.date).format('MMMM DD, YYYY')}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.rating}</div>
    </div>
  );
}
