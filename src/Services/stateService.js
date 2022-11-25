// Redux eto biblioteka, kotoraja pomogaet nam rabotat' s sostojanijami komponentov
// redux eto globalnaja sostojanie prilozenija
// redux vzaimodejstvuet tolko s teme komponentami, s kotoromy neobhodimo, ne zatragivaja ostalnqh v cepo4ke
// eto pomogaet luche kontrolirovat' render componentov
// redux rabotaet v ne zavisimosti ot strukturnovo dereva projekta
// @reduxjs/toolkit - eto glavnaja biblioteka redux 

import { createAction, createReducer, configureStore } from '@reduxjs/toolkit'
import moment from 'moment';

const pageSize = 12;
// peremennaja tip 'object' iznachalnoe sostojanie
const initialState = {
    errorMessage: null,
    totalResults: pageSize,
    searchParams: {
        q: 'world cup',
        from: moment().format("YYYY-MM-DDT00:00:00.000"),
        to: moment().format("YYYY-MM-DDT23:59:59.999"),
        language: 'en',
        searchIn: 'title,description,content',
        pageSize, 
        page: 1,
    }
};
// createAction deklarieut dejstvie v Redux
// Eto dejstvie my zapuskaem, kogda hotim izmenit sostojanie
export const setErrorMessage = createAction("setErrorMessage");
export const setPage = createAction("setPage");
export const setTotalResults = createAction("setTotalResults");
export const setSearchParams = createAction("setSearchParams");

// createReducer eto obrabotchik dejstvija 
// Sdes' my govorim Reduxu, 4to my hotim sdelat' etim dejstviem
// v nashem slu4ae(i v osnovnom) my menjaem sostojanie
// action.payload - tut nahoditca novaja peredannaja informacija
const reducer = createReducer(initialState, {
    [setErrorMessage]: (state, action) => {
        state.errorMessage = action.payload;
    },
    [setPage]: (state,action) => {
        state.searchParams.page = action.payload;
    },
    [setTotalResults]: (state, action) => {
        state.totalResults = action.payload;
    },
    [setSearchParams]: (state, action) => {
        state.searchParams = action.payload;
    }
    
});

//zdes my vse sobiraet vse v odno i sozdajom 'hranilishe'
export const store = configureStore({ reducer });

// hranilishe my peredajom v komponent Provider ot react-redux biblioteki i oborachicaem ves' nash project im (v index.js)

