import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; //TODO

const name = "collection";
const initialState = {
    images: {}
};
const reducers = {
};

export const CollectionSearch = createSlice({
    name: name,
    initialState: initialState,
    reducers: reducers,
    extraReducers: extraReducers
});