//store
import {createStore, combineReducers} from 'redux';
import categoryReducer from './reducers/category.reducer';
import productsReducer from './reducers/product.reducer';


const rootReducer = combineReducers({
    category: categoryReducer,
    product: productsReducer
});

export default createStore(rootReducer);

