import { useEffect, useCallback, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../rootReducer';
import { apiAuthenticate, apiGetUsers } from './actions';
import { useHistory } from 'react-router';
import { useMe } from '../me/hooks';
import { UserRoles } from './types';
import { orderStatuses } from '../orders/types';
import { isAllowedOrderAction, AllowedAction } from '../../allowedActionsConfig';

export const useGetUsers = (forceFetch?: boolean) => {
  const dispatch = useDispatch();
  const { users, loading, hasLoaded, errorMessage } = useSelector((state: RootReducer) => state.users);

  useEffect(() => {
    if ((!hasLoaded || forceFetch) && !loading) {
      dispatch(apiGetUsers());
    }
  }, [hasLoaded, loading, forceFetch, dispatch]);

  return {
    users,
    loading,
    hasLoaded,
    errorMessage,
  };
};

export const useAuthenticate = () => {
  const dispatch = useDispatch();
  const [redirect, setRedirect] = useState(false);
  const { me } = useSelector((state: RootReducer) => state.me);
  const { errorMessage, loading } = useSelector((state: RootReducer) => state.users);
  const history = useHistory();

  const authenticated = useMemo(() => !!me, [me]);

  const authenticate = useCallback(
    (username: string, password: string) => {
      setRedirect(true);
      dispatch(apiAuthenticate(username, password));
    },
    [dispatch],
  );

  useEffect(() => {
    if (redirect) {
      setRedirect(false);
      history.push('/');
    }
  }, [redirect, history]);

  return {
    authenticated,
    authenticate,
    errorMessage,
    loading,
  };
};

export const useAllowAdmin = () => {
  const { me } = useMe();
  const { push } = useHistory();

  useEffect(() => {
    if (me && me.role !== UserRoles.admin) {
      push('/');
    }
  }, [me, push]);
};

export const useAllowedActions = () => {
  const { role } = useMe();
  return (orderStatus: orderStatuses, key: AllowedAction) => isAllowedOrderAction(role, orderStatus, key);
};
