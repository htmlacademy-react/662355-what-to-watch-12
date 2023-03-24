import { Navigate, useParams } from 'react-router-dom';
import { Reviews as ReviewsType } from '../../types/review';
import { TypeOfTab } from '../../utils';
import ReviewCard from '../review/review';
import Tabs from '../tabs/tabs';

type ReviewProps = {
  reviews: ReviewsType;
  choosedTab: TypeOfTab;
}

export default function Reviews({ reviews, choosedTab }: ReviewProps): JSX.Element {
  const { id } = useParams();
  if (!id) {
    return <Navigate to={'/'} />;
  }
  const len = reviews.length;
  const column = (start: number, end: number) => reviews.slice(start, end).map((review) => <ReviewCard key={review.id} review={review} />);
  return (
    <Tabs id={parseInt(id, 10)} choosedTabs={choosedTab}>
      <div className="film-card__reviews film-card__row">
        <div className="film-card__reviews-col">
          {column(len / 2, len)}
        </div>
        <div className="film-card__reviews-col">
          {column(0, len / 2)}
        </div>
      </div>
    </Tabs>
  );
}
