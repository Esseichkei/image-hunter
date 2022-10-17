import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const accessKey = 'R_zWk1k1lts7JyWGw7v-Qc0wHTHAVY_GAsVvYVEn9a4';
export const loadImages = createAsyncThunk("search/loadImages", async (searchTerm, thunkAPI) => {
    const response = await fetch(`http://api.unsplash.com/search/photos/?client_id=${accessKey}&query=${searchTerm}`);
    const data = await response.json();
    console.log(data) //debug!
    return data;
});

const name = "search";
const initialState = {
    isLoading: false,
    hasError: false,
    images: []
};
const reducers = {
};
const extraReducers = {
    [loadImages.pending]: (state, action) => {
        state.isLoading = true;
        state.hasError = false;
    },
    [loadImages.fulfilled]: (state, action) => {
        state.images = action.payload.results.map((img) => {
            return {
                id: img.id,
                description: img.description,
                urls: img.urls,
                links: img.links};
        })
        state.isLoading = false;
        state.hasError = false;
    },
    [loadImages.rejected]: (state, action) => {
        state.isLoading = false;
        state.hasError = true;
        console.log(action.payload);
    }
}

export const SearchSlice = createSlice({
    name: name,
    initialState: initialState,
    reducers: reducers,
    extraReducers: extraReducers
});

export const selectSearch = (state) => state.search;