import { SearchFavButton, SearchImg, SearchItemDiv } from "../../style/Style";
import { useState, useEffect } from "react";
import { addFavorite, loadFavorites, removeFavorite, selectCollection } from "../../slices/collectionSlice/CollectionSlice";
import { useDispatch, useSelector } from "react-redux";

/*function saveToLocalStorage(image) {
}*/

export function SearchItem(props) {
    const collection = useSelector(selectCollection);
    const dispatch = useDispatch();
    useEffect(() => {if (collection.loaded === false) {dispatch(loadFavorites());}}, [dispatch, collection.loaded]); //useEffect is there to avoid trouble dispatching the thing all the time
    const [fav, favSetter] = useState(collection.images.filter(image => image.id === props.imagedata.id).length > 0);
    const handleFavIconClick = () => {
        if (fav === false) {
            dispatch(addFavorite(props.imagedata));
            favSetter(true);
        } else {
            dispatch(removeFavorite(props.imagedata));
            favSetter(false);
        }
    }
    return (<SearchItemDiv key={'div' + props.imagedata.id}>
                <SearchImg src={props.imagedata.urls.regular} alt={props.imagedata.description} key={'img' + props.imagedata.id}/>
                <SearchFavButton key={props.imagedata.id} onClick={handleFavIconClick} opacity={fav ? 'true' : ''}/>
            </SearchItemDiv>);
}