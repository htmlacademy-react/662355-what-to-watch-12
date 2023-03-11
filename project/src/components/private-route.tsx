import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
  children: JSX.Element;
  hasAccess: boolean;
};

function PrivateRoute({ hasAccess, children }: PrivateRouteProps): JSX.Element {
  return hasAccess ? children : <Navigate to={'/login'} />;
}

export default PrivateRoute;
