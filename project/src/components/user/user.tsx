import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../const';
import { logout } from '../../store/api-action';
import { redirectToRoute } from '../../store/action';
import { getAuthorizationStatus, getUser } from '../../store/user-process/selectors';

export default function UserIcon(): JSX.Element {
  const navigate = useNavigate();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const user = useAppSelector(getUser);
  const dispatch = useAppDispatch();

  const signOut = () => {
    dispatch(logout());
    dispatch(redirectToRoute('/'));
  };

  return (
    <ul className="user-block">
      {authorizationStatus === AuthorizationStatus.AUTH ?
        <>
          <li className="user-block__item" onClick={() => navigate('/mylist')}>
            <div className="user-block__avatar">
              <img src={user.avatarUrl} alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item" onClick={signOut}>
            <Link to="#" className="user-block__link">Sign out</Link>
          </li>
        </>
        : <Link to="/login" className="user-block__link">Sign in</Link>}
    </ul>
  );
}
