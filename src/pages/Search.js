import { MainDiv, SearchImg } from "../style/Style";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSearch, loadImages } from "../slices/searchSlice/SearchSlice";

export function Search(props) {
    const search = useSelector(selectSearch);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(loadImages('beach'));
    },[]);
    return (
        <MainDiv>
            {
                search.images.map((image) => {
                    return <SearchImg src={image.urls.regular} alt={image.description} key={image.id}/>;
                })
            }
        </MainDiv>
    );
}