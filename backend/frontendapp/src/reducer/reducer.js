const initialState = {
  user: null,
  errors: {},
};

export default function Reducer(state = initialState, action) {
  switch (action.type) {
  case 'LOGIN_SUCCESSFUL':
    return Object.assign({}, state, {
      user: action.data,
      errors: null,
    });

  case 'LOGIN_ERROR':
    return Object.assign({}, state, {
      errors: action.data,
      user: null,
    });

  default:
    return state;
  }
}
