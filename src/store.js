import { configureStore } from "@reduxjs/toolkit";
import { displayEntiresReducer, pageNumberReducer, searchTermReducer } from "./features/carPageSlice";

export const store = configureStore({
    reducer: {
        searchTerm: searchTermReducer,
        displayEntries: displayEntiresReducer,
        pageNumber: pageNumberReducer,
    }
})