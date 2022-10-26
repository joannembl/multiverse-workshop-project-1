import { configureStore } from "@reduxjs/toolkit";
import { carsReducer, displayEntiresReducer, pageNumberReducer, searchTermReducer } from "./features/carPageSlice";

export const store = configureStore({
    reducer: {
        searchTerm: searchTermReducer,
        displayEntries: displayEntiresReducer,
        pageNumber: pageNumberReducer,
        cars: carsReducer
    }
})