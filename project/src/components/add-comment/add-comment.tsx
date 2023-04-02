import { MouseEvent, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { saveReview } from '../../store/api-action';
import Star from '../star/star';
import { ChangeEvent } from 'react';

type AddCommentProps = {
  filmId: number;
}

export default function AddComment({ filmId }: AddCommentProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const onChangeRating = (evt: ChangeEvent<HTMLInputElement>) => {
    setRating(parseInt(evt.target.value, 10));
  };

  const onChangeComment = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(evt.target.value);
  };

  const onSubmit = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    if (rating > 0 && comment.length > 0) {
      setDisabled(true);
      dispatch(saveReview({
        reviewData: {
          filmId: filmId,
          review: {
            rating: parseInt(rating.toString(), 10),
            comment: comment,
          }
        },
        onFinish: () => setDisabled(false),
      }));
    }
  };

  const isDisableButton = (): boolean => disabled || rating === 0 || comment.length < 50 || comment.length > 400;

  const stars = Array.from({ length: 10 }, (_, i) => <Star value={i + 1} key={`star-${i + 1}`} onChange={onChangeRating} disabled={disabled} />).reverse();
  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {stars}
        </div>
      </div>

      <div className="add-review__text" style={{ background: 'rgba(255,255,255,0.25)' }}>
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" value={comment} onChange={onChangeComment} disabled={disabled}></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" onClick={onSubmit} disabled={isDisableButton()}>Post</button>
        </div>

      </div>
    </form>
  );
}
