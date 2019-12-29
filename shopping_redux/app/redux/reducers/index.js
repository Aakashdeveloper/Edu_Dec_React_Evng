import { combineReducers } from 'redux';
import products from './product_reducer';

const rootReducer = combineReducers({
    products
})

export default rootReducer;