import { SearchSlice } from "./searchSlice/SearchSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        search: SearchSlice.reducer
    }
});