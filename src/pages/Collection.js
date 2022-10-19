import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadFavorites, selectCollection } from "../slices/collectionSlice/CollectionSlice";
import { MainDiv, OrderByButton, OrderByDiv } from "../style/Style";
import { CollectionItem } from "../components/collectionItem/CollectionItem";
import { useParams } from "react-router-dom";

export function Collection(props) {
    const collection = useSelector(selectCollection);
    const params = useParams();
    const query = params.query !== undefined ? params.query : '';
    const dispatch = useDispatch();
    useEffect(() => {if (collection.loaded === false) {dispatch(loadFavorites());}}, [dispatch, collection.loaded]);
    const [orderBy, orderBySetter] = useState('addedAtTime');
    const chooseChrono = () => {orderBySetter('addedAtTime')};
    const chooseLikes = () => {orderBySetter('likes')};
    const chooseWidth = () => {orderBySetter('width')};
    const chooseHeight = () => {orderBySetter('height')};
    return (
        <MainDiv>
            <OrderByDiv>
                <p>Order by (Ascending):</p>
                <OrderByButton active={orderBy === 'addedAtTime'} onClick={chooseChrono}>Chronological</OrderByButton>
                <OrderByButton active={orderBy === 'likes'} onClick={chooseLikes}>Likes</OrderByButton>
                <OrderByButton active={orderBy === 'width'} onClick={chooseWidth}>Width</OrderByButton>
                <OrderByButton active={orderBy === 'height'} onClick={chooseHeight}>Height</OrderByButton>
            </OrderByDiv>
            {collection.images.filter(image => (image.description ? image.description.toLowerCase() : '').includes(query.toLowerCase())).sort((a, b) => a[orderBy] - b[orderBy]).map(image => <CollectionItem imagedata={image} key={'citem' + image.id}/>)}
        </MainDiv>
    );
}