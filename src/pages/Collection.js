import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadFavorites, selectCollection } from "../slices/collectionSlice/CollectionSlice";
import { MainDiv } from "../style/Style";
import { CollectionItem } from "../components/collectionItem/CollectionItem";

export function Collection(props) {
    const collection = useSelector(selectCollection);
    const dispatch = useDispatch();
    useEffect(() => {if (collection.loaded === false) {dispatch(loadFavorites());}}, [dispatch, collection.loaded]);
    return (
        <MainDiv>
            {collection.images.map(image => <CollectionItem imagedata={image} key={'citem' + image.id}/>)}
        </MainDiv>
    );
}