import { combineReducers } from 'redux';
import productReducer from '../components/Products';

const rootReducer = combineReducers({
    counter: counterReducer,
    Products: productReducer
});

export default rootReducer;