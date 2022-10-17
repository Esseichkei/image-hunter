import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; //TODO

const myAccessKey = 'R_zWk1k1lts7JyWGw7v-Qc0wHTHAVY_GAsVvYVEn9a4';

const loadImageById = createAsyncThunk('collection/loadImageById', async (id, thunkAPI) => {
    const response = await fetch(`https://api.unsplash.com/photos?client_id=${myAccessKey}?id=${id}`, {
        method: 'GET',
        headers: {
            'Accept-Version': v1,
        }
    });
    const data = await response.json();
    console.log(data) //debug!
    return data;
});

const name = "collection";
const initialState = {
    images: {}
};
const reducers = {
};
const extraReducers = {
    [loadImageById.pending]: (state, action) => {
        state.isLoading = true;
        state.hasError = false;
    },
    [loadImageById.fulfilled]: (state, action) => {
        state.images[action.payload.id] = {
                description: action.payload.description,
                urls: action.payload.urls,
                links: action.payload.links};
        state.isLoading = false;
        state.hasError = false;
    },
    [loadImageById.rejected]: (state, action) => {
        state.isLoading = false;
        state.hasError = true;
    }
}

export const CollectionSearch = createSlice({
    name: name,
    initialState: initialState,
    reducers: reducers,
    extraReducers: extraReducers
});