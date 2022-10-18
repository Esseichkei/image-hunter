import { createSlice } from "@reduxjs/toolkit"; //TODO

const name = "collection";
const initialState = {
    loaded: false,
    images: []
};
const reducers = {
    loadFavorites: (state, action) => {
        if (state.loaded === false) {
            state.loaded = true;
            if (localStorage.getItem('collectionImages') === null) {
                state.images = [];
            } else {
            state.images = [...JSON.parse(localStorage.getItem('collectionImages'))];
            }
        }
    },
    addFavorite: (state, action) => {
        if (state.images.filter(image => image.id === action.payload.id).length === 0) {// no prior picture with that id was added
            state.images.push({...action.payload, addedAtTime: Date.now()});
            localStorage.setItem('collectionImages', JSON.stringify(state.images));
        }
        console.log(localStorage.getItem('collectionImages'));
    },
    deleteFavorite: (state, action) => {
        state.images = state.images.filter(image => image.id !== action.payload.id)
        localStorage.setItem('collectionImages', JSON.stringify(state.images));
        console.log(localStorage.getItem('collectionImages'));
    },
    editDescriptionAtId: (state, action) => {
        state.images.map((image) => {
            if (image.id === action.payload.id) {
                image.description = action.payload.description;
            }
            return image;
        });
        localStorage.setItem('collectionImages', JSON.stringify(state.images));
    }
};

export const CollectionSlice = createSlice({
    name: name,
    initialState: initialState,
    reducers: reducers,
});

export const { loadFavorites, addFavorite, deleteFavorite, editDescriptionAtId } = CollectionSlice.actions;

export const selectCollection = (state) => state.collection;