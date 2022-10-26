import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    cars: [],
    car: {},
    isLoading: true,
    searchTerm: '',
    displayEntries: 10,
    pageNumber: 1,
};

export const getCars = createAsyncThunk('cars/getCars', () => {
    return fetch("http://localhost:3000/cars")
        .then((resp) => resp.json())
        .catch((err) => console.log(err));
});

/* REDUCERS */
export const carsReducer = (state = initialState.cars, action) => {
    switch(action.type) {
        case 'cars/getCars/fulfilled':
            return action.payload;
        default:
            return state;
    }
};

export const searchTermReducer = (state = initialState.searchTerm, action) => {
    switch (action.type) {
        case 'searchTerm/setSearchTerm':
            return action.payload;
        case 'searchTerm/clearSearchTerm':
            return '';
        default:
            return state;
    }
};

export const displayEntiresReducer = (state = initialState.displayEntries, action) => {
    switch (action.type) {
        case 'displayEntries/setDisplayEntries':
            return action.payload;
        default:
            return state;
    }
};

export const pageNumberReducer = (state = initialState.pageNumber, action) => {
    switch(action.type) {
        case 'pageNumber/setPageNumber':
            return action.payload;
        default:
            return state;
    }
};

/* ACTIONS */

export function setSearchTerm(term) {
    return {
      type: 'searchTerm/setSearchTerm',
      payload: term
    }
  }
  
export function clearSearchTerm() {
    return {
      type: 'searchTerm/clearSearchTerm'
    }
}


export function setDisplayEntries(value) {
    return {
        type: 'displayEntries/setDisplayEntries',
        payload: value
    }
}

export function setPageNumber(value) {
    return {
        type: 'pageNumber/setPageNumber',
        payload: value
    }
}


/* SELECTORS */
export const selectSearchTerm = (state) => state.searchTerm;

export const selectDisplayEntries = (state) => state.displayEntries;

export const selectPageNumber = (state) => state.pageNumber;

export const selectAllCars = (state) => state.cars;
