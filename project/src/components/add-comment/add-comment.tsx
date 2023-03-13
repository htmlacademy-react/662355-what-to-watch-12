import { ChangeEvent, useState } from 'react';

export default function AddComment(): JSX.Element {
  const [formData, setFormData] = useState({
    rating: -1,
    text: '',
  });
  const onChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();
    setFormData({
      ...formData,
      rating: +evt.target.value,
    });
  };

  const onChangeComment = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    evt.preventDefault();
    setFormData({
      ...formData,
      text: evt.target.value,
    });
  };
  const arrComponents = [];
  for (let i = 1; i <= 10; i++) {
    arrComponents.push(
      <>
        <input className="rating__input" id={`star-${i}`} type="radio" name="rating" value={i} onChange={onChangeHandler} checked={formData.rating === i} key={`input-${i}`} />
        <label className="rating__label" htmlFor={`star-${i}`} key={`label-${i}`}>Rating {i}</label>
      </>);
  }
  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {arrComponents}
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" value={formData.text} onChange={onChangeComment}></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  );
}
