import { MouseEvent, useCallback, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { saveReview } from '../../store/api-action';
import { ChangeEvent } from 'react';
import Stars from '../stars/stars';

type AddCommentProps = {
  filmId: number;
}

export default function AddComment({ filmId }: AddCommentProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const onChangeRating = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    setRating(parseInt(evt.target.value, 10));
  }, []);

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

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          <Stars onChange={onChangeRating} disabled={disabled} />
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
