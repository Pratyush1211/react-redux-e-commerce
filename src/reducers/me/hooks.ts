import { useSelector, useDispatch } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router';
import { RootReducer } from '../rootReducer';
import { clearMe } from './actions';

export const useMe = () => {
  const me = useSelector((state: RootReducer) => state.me);
  return me;
};

export const useMeActions = () => {
  const dispatch = useDispatch();

  return {
    clearMe: useCallback(() => dispatch(clearMe()), [dispatch]),
  };
};

export const useLogout = () => {
  const { clearMe } = useMeActions();
  const { push } = useHistory();
  useEffect(() => {
    push('/');
    clearMe();
  }, [clearMe, push]);
};
