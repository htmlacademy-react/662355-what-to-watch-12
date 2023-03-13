import { Link } from 'react-router-dom';

type LogoProps = { isLight?: boolean };

export default function Logo({ isLight = false }: LogoProps): JSX.Element {
  return (
    <div className="logo">
      <Link to="/" className={isLight ? 'logo__link logo__link--light' : 'logo__link'}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}
