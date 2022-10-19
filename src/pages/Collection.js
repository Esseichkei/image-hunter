import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadFavorites, selectCollection } from "../slices/collectionSlice/CollectionSlice";
import { MainDiv } from "../style/Style";
import { CollectionItem } from "../components/collectionItem/CollectionItem";
import { useParams } from "react-router-dom";

export function Collection(props) {
    const collection = useSelector(selectCollection);
    const params = useParams();
    const query = params.query !== undefined ? params.query : '';
    const dispatch = useDispatch();
    useEffect(() => {if (collection.loaded === false) {dispatch(loadFavorites());}}, [dispatch, collection.loaded]);
    return (
        <MainDiv>
            {collection.images.filter(image => image.description.toLowerCase().includes(query.toLowerCase())).map(image => <CollectionItem imagedata={image} key={'citem' + image.id}/>)}
        </MainDiv>
    );
}