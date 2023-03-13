import { Link, useNavigate } from 'react-router-dom';
import { User } from '../../types/user';

type UserProps = { user: User };

export default function UserIcon({ user }: UserProps): JSX.Element {
  const navigate = useNavigate();
  return (
    <ul className="user-block">
      <li className="user-block__item" onClick={() => navigate('/mylist')}>
        <div className="user-block__avatar">
          <img src={user.avatarUrl} alt="User avatar" width="63" height="63" />
        </div>
      </li>
      <li className="user-block__item">
        <Link to="#" className="user-block__link">Sign out</Link>
      </li>
    </ul>
  );
}
