import { configureStore } from '@reduxjs/toolkit';

import heroesReducer from '../components/heroesList/heroesSlice';
import filtersReducer from '../components/heroesFilters/filtersSlice';

const stringMiddleware = () => (next) => (action) => {     // модифицируем dispatch аля redux-thunk (createThunkMiddleware)
    if (typeof action === 'string'){
        return next({
            type: action
        })
    } else {
        return next(action);
    }
};  

// const store = createStore(combineReducers({heroesReducer, filtersReducer}),
//                           applyMiddleware(ReduxThunk, stringMiddleware));

const store = configureStore({
    reducer: {heroesReducer, filtersReducer},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
    devTools: process.env.NODE_ENV !== 'production'
})

export default store; 