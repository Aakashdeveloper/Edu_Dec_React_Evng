/*export default function(state={}, action){
    switch(action.type){
        case 'GET_PRODUCT':
            return {...state, items:action.payload}
        default:
            return state
    }
}
*/

import { productActions } from '../actions/index';

const initialState = {
  data: [],
  error: null,
  requesting: false,
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case productActions.PENDING: {
      return { ...state, requesting: true };
    }
    case productActions.FULFILLED: {
      return { ...state, requesting: false, data: action.payload };
    }
    case productActions.REJECTED: {
      return { ...state, requesting: false, error: 'Terjadi kesalahan saat mengambil data kategori' };
    }
    default: {
      return state;
    }
  }
};

export default productReducer;