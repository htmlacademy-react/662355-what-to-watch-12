import { ChangeEvent } from 'react';

type StarProps = {
  value: number;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
}

export default function Star({ value, onChange, disabled }: StarProps) {
  return (
    <>
      <input className="rating__input" id={`star-${value}`} type="radio" name="rating" value={value} onChange={onChange} disabled={disabled} />
      <label className="rating__label" htmlFor={`star-${value}`}>Rating {value}</label>
    </>
  );
}
