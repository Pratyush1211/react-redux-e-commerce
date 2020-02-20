import { ReducerAction } from '../store';
import { MeReducer, ActionTypes } from './types';
import { UserRoles } from '../users/types';

const initialState = {
  me: null,
  role: UserRoles.unAuthenticated,
  loading: false,
  hasLoaded: false,
};

const reducer = (state = initialState as MeReducer, { type, payload }: ReducerAction): MeReducer => {
  switch (type) {
    case ActionTypes.set: {
      return { ...state, me: payload.me, role: payload.me.role };
    }
    case ActionTypes.clear: {
      return initialState;
    }
    default:
      return state;
  }
};

export default reducer;
