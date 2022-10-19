import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteFavorite } from "../../slices/collectionSlice/CollectionSlice";
import { CollectionDiv, SearchImg, CollectionDetails, CollectionEdit, CollectionDownload, CollectionDelete, EmptyDiv } from "../../style/Style";
import { Description } from "./Description";

export function CollectionItem(props) {
    const dispatch = useDispatch();
    const handleDeleteClick = () => {
        dispatch(deleteFavorite(props.imagedata));
    };
    const [showDescription, showDescriptionSetter] = useState(false);
    const closeDescription = () => {showDescriptionSetter(false)};
    const openDescription = () => {showDescriptionSetter(true)};
    return (
        <EmptyDiv>
            <CollectionDiv>
            <SearchImg src={props.imagedata.urls.regular} alt={props.imagedata.description}/>
            <h4>
                Image ID: {props.imagedata.id} <br/>
                Dimensions: {props.imagedata.width} x {props.imagedata.height} <br/>
                Likes: {props.imagedata.likes} <br/>
                Description: {props.imagedata.description ? props.imagedata.description : "Not found."}
            </h4>
            <CollectionDetails>
                <CollectionEdit onClick={openDescription}/>
                <a href={props.imagedata.links.download} target="_blank" rel="noreferrer" download>
                    <CollectionDownload/>
                </a>
                <CollectionDelete onClick={handleDeleteClick}/>
            </CollectionDetails>
        </CollectionDiv>
        <Description imagedata={props.imagedata} show={showDescription} close={closeDescription}/>
    </EmptyDiv>
    );
}