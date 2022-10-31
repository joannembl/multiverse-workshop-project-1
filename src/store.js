import { configureStore } from "@reduxjs/toolkit";
import { carsReducer, displayEntriesReducer, pageNumberReducer, searchTermReducer } from "./features/carPageSlice";

export const store = configureStore({
    reducer: {
        searchTerm: searchTermReducer,
        displayEntries: displayEntriesReducer,
        pageNumber: pageNumberReducer,
        cars: carsReducer
    }
})