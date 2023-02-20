// import { createReducer } from '@reduxjs/toolkit';

// import {
//     filtersFetched,
//     filtersFetching,
//     filtersFetchingError,
//     activeFilterChanged,
// } from '../actions';

// const initialState = {
//     filters: [],
//     filtersLoadingStatus: 'idle',
//     activeFilterChanged: 'all'
// }

// const filtersReducer = createReducer(initialState, { 
//                         [filtersFetching]: state => {state.filtersLoadingStatus = 'loading'},
//                         [filtersFetched]: (state, action) => {
//                                 state.filtersLoadingStatus = 'idle';
//                                 state.filters = action.payload; 
//                             },
//                         [filtersFetchingError]: state => {
//                                 state.filtersLoadingStatus = 'error';
//                             },
//                         [activeFilterChanged]: (state, action) => {
//                                 state.activeFilterChanged = action.payload;
//                             }
//                         },       
//                         [],
//                         state => state    // default case
// )

// const initialState = {
//     filters: [],
//     filtersLoadingStatus: 'idle',
//     activeFilter: 'all'
// }

// const filtersReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'FILTERS_FETCHING':
//             return {
//                 ...state,
//                 filtersLoadingStatus: 'loading'
//             }
//         case 'FILTERS_FETCHED':
//             return {
//                 ...state,
//                 filters: action.payload,
//                 filtersLoadingStatus: 'idle'
//             }
//         case 'FILTERS_FETCHING_ERROR':
//             return {
//                 ...state,
//                 filtersLoadingStatus: 'error'
//             }
//         case 'ACTIVE_FILTER_CHANGED':
//             return {
//                 ...state,
//                 activeFilter: action.payload
//             }
//         default: return state
//     }
// }

export default filtersReducer;