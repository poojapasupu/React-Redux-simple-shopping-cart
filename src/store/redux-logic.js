import {configureStore} from '@reduxjs/toolkit';
import uiSliceReducer from './ui-slice';
import cartReducer from './cart-slice';

const store = configureStore({
    reducer:{
        uiReducer: uiSliceReducer,
        cartReducer
    }
});

export default store;