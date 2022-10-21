const initialState = {
    searchTerm: '',
    displayEntries: 10,
    pageNumber: 1,
};


/* REDUCERS */
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
export const selectAllCars = (state) => state.allCars;

export const selectSearchTerm = (state) => state.searchTerm;

export const selectDisplayEntries = (state) => state.displayEntries;

export const selectPageNumber = (state) => state.pageNumber;
