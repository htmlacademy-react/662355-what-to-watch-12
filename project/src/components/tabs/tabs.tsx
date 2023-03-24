import { Link } from 'react-router-dom';
import { TypeOfTab } from '../../utils';
import cn from 'classnames';

type TabsProps = {
  id: number;
  choosedTabs: TypeOfTab;
  children: JSX.Element;
}

export default function Tabs({ id, choosedTabs, children }: TabsProps): JSX.Element {
  const classes = (typeOfTab: TypeOfTab) => cn('film-nav__item', { 'film-nav__item--active': choosedTabs === typeOfTab });
  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={classes(TypeOfTab.OVERVIEW)}>
            <Link to={`/films/${id}`} className="film-nav__link">Overview</Link>
          </li>
          <li className={classes(TypeOfTab.DETAILS)}>
            <Link to={`/films/${id}/details`} className="film-nav__link">Details</Link>
          </li>
          <li className={classes(TypeOfTab.REVIEWS)}>
            <Link to={`/films/${id}/reviews`} className="film-nav__link">Reviews</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
}
