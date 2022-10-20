import { MainDiv, ResponsiveGallery, ResponsiveGalleryItem } from "../style/Style";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSearch, loadImages } from "../slices/searchSlice/SearchSlice";
import { SearchItem } from "../components/searchItem/SearchItem";
import { useParams } from "react-router-dom";

export function Search(props) {
    const search = useSelector(selectSearch);
    const params = useParams();
    const query = params.query !== undefined ? params.query : '';
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(loadImages(query));
    },[dispatch, query]);
    return (
        <MainDiv>
            <ResponsiveGallery>
                {search.images.map(image => {
                    return <ResponsiveGalleryItem key={'sres' + image.id}><SearchItem imagedata={image} key={'sitem' + image.id}/></ResponsiveGalleryItem>;
                })}
            </ResponsiveGallery>
        </MainDiv>
    );
}