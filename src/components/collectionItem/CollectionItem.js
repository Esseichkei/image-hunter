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
    const downloadImage = async () => {
        const toDataURL = async (url) => {
            const blob = await fetch(url).then(res => res.blob());
            return URL.createObjectURL(blob);
        };
        const a = document.createElement("a");
        a.href = await toDataURL(props.imagedata.urls.full);
        a.download = "";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };
    return (
        <EmptyDiv>
            <CollectionDiv>
                <SearchImg src={props.imagedata.urls.regular} alt={props.imagedata.description} />
                <h4>
                    Image ID: {props.imagedata.id} <br/>
                    Dimensions: {props.imagedata.width} x {props.imagedata.height} <br/>
                    Likes: {props.imagedata.likes} <br/>
                    Description: {props.imagedata.description ? props.imagedata.description : "Not found."}
                </h4>
                <CollectionDetails>
                    <CollectionEdit onClick={openDescription}/>
                    <CollectionDownload onClick={downloadImage}/>
                    <CollectionDelete onClick={handleDeleteClick}/>
                </CollectionDetails>
            </CollectionDiv>
        <Description imagedata={props.imagedata} show={showDescription} close={closeDescription}/>
    </EmptyDiv>
    );
}