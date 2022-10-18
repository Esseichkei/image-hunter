import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const accessKey = 'R_zWk1k1lts7JyWGw7v-Qc0wHTHAVY_GAsVvYVEn9a4';
export const loadImages = createAsyncThunk("search/loadImages", async (searchTerm, thunkAPI) => {
    let response;
    if (searchTerm.length === 0) {
        response = await fetch(`http://api.unsplash.com/photos/random/?client_id=${accessKey}&count=10`);
    } else {
        response = await fetch(`http://api.unsplash.com/search/photos/?client_id=${accessKey}&query=${searchTerm}`);
    }
    const data = await response.json();
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
        if (action.payload.results !== undefined){
            state.images = action.payload.results.map((img) => {
                return {
                    id: img.id,
                    height: img.height,
                    width: img.width,
                    likes: img.likes,
                    description: img.description,
                    urls: img.urls,
                    links: img.links};
            });
        } else {
            state.images = action.payload.map((img) => {
                return {
                    id: img.id,
                    height: img.height,
                    width: img.width,
                    likes: img.likes,
                    description: img.description,
                    urls: img.urls,
                    links: img.links};
            });
        }
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