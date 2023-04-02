import { ChangeEvent, memo } from 'react';
import Star from '../star/star';

type StarsProps = {
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
}

function Stars({ onChange, disabled }: StarsProps): JSX.Element {
  return (
    <>
      {Array.from({ length: 10 }, (_, i) => <Star value={i + 1} key={`star-${i + 1}`} onChange={onChange} disabled={disabled} />).reverse()}
    </>
  );
}

export default memo(Stars);
