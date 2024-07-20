import useAuth from '../hooks/useAuth';

import LoggedInRoutes from './LoggedInRoutes';
import LoggedOutRoutes from './LoggedOutRoutes';

const Router = () => {
  const { signed } = useAuth();

  return (
    <>
      {signed ? <LoggedInRoutes /> : <LoggedOutRoutes />}
    </>
  )
};

export default Router;