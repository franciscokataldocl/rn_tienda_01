//store
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import categoryReducer from './reducers/category.reducer';
import productsReducer from './reducers/product.reducer';
import cartReducer from './reducers/cart.reducer';
import orderReducer from './reducers/order.reducer';


const rootReducer = combineReducers({
    category: categoryReducer,
    product: productsReducer,
    cart: cartReducer,
    order: orderReducer
});

export default createStore(rootReducer, applyMiddleware(thunk));

