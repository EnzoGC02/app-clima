const initialState={
  climaActual: null,
  pronostico: null,
  error: false,
  isLoading: false,
};

const actionTypes={
  error: 'ERROR',
  success: 'SUCCESS',
  loading: 'LOADING',
};

const reducer =(state, action) =>{
  switch (action.type) {
    case actionTypes.error:
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    case actionTypes.success:
      return {
        ...state,
        climaActual: action.payload.climaActual,
        pronostico: action.payload.pronostico,
        isLoading: false,
        error: false,
      };
    case actionTypes.loading:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};

export {
  initialState,
  actionTypes,
  reducer,
};
