import { useDispatch } from "react-redux";
import { deleteFavorite } from "../../slices/collectionSlice/CollectionSlice";
import { CollectionDiv, SearchImg, CollectionDetails, CollectionEdit, CollectionDownload, CollectionDelete } from "../../style/Style";

export function CollectionItem(props) {
    const dispatch = useDispatch();
    const handleDeleteClick = () => {
        dispatch(deleteFavorite(props.imagedata));
    };
    return (<CollectionDiv>
        <SearchImg src={props.imagedata.urls.regular} alt={props.imagedata.description}/>
        <h4>
            Image ID: {props.imagedata.id} <br/>
            Dimensions: {props.imagedata.width} x {props.imagedata.height} <br/>
            Likes: {props.imagedata.likes} <br/>
            Description: {props.imagedata.description ? props.imagedata.description : "Not found."}
        </h4>
        <CollectionDetails>
            <CollectionEdit/>
            <a href={props.imagedata.links.download} target="_blank" rel="noreferrer" download>
                <CollectionDownload/>
            </a>
            <CollectionDelete onClick={handleDeleteClick}/>
        </CollectionDetails>
    </CollectionDiv>);
}