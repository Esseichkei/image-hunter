import { SearchSlice } from "./searchSlice/SearchSlice";
import { configureStore } from "@reduxjs/toolkit";
import { CollectionSlice } from "./collectionSlice/CollectionSlice";

export const store = configureStore({
    reducer: {
        search: SearchSlice.reducer,
        collection: CollectionSlice.reducer
    }
});