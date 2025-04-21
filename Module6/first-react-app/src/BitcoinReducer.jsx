import { useEffect, usereducer} from "react";

const initialState = {
  loading: true,
  data: null,
  error: null,
};
const actionTypes = {
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  FETCH_FAILURE: 'FETCH_FAILURE',
  FETCH_REQUEST: 'FETCH_REQUEST',
};
const bitcoinRatesReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.FETCH_REQUEST:
      return { ...state, loading: true, error: null };
    case actionTypes.FETCH_SUCCESS:
      return { loading: false, data: action.payload, error: null };
    case actionTypes.FETCH_FAILURE:
      return { loading: false, data: null, error: action.payload };
    default:
      return state;
  }
};
const useBitcoinRates = () => {
  const [state, dispatch] = useReducer( initialState,bitcoinRatesReducer);
}

}