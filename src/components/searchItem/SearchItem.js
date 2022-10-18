import { SearchFavButton, SearchImg, SearchItemDiv } from "../../style/Style";
import { useState, useEffect } from "react";
import { addFavorite, loadFavorites, deleteFavorite, selectCollection } from "../../slices/collectionSlice/CollectionSlice";
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
            dispatch(deleteFavorite(props.imagedata));
            favSetter(false);
        }
    }
    return (<SearchItemDiv>
                <SearchImg src={props.imagedata.urls.regular} alt={props.imagedata.description}/>
                <SearchFavButton onClick={handleFavIconClick} opacity={fav ? 'true' : ''}/>
            </SearchItemDiv>);
}