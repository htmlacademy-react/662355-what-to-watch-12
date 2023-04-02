import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../hooks';
import { AuthorizationStatus } from '../const';
import { getAuthorizationStatus } from '../store/user-process/selectors';

type PrivateRouteProps = {
  children: JSX.Element;
};

function PrivateRoute({ children }: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  return authorizationStatus === AuthorizationStatus.AUTH ? children : <Navigate to={'/login'} />;
}

export default PrivateRoute;
