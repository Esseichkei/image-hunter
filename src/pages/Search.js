import { MainDiv, SearchFavButton, SearchImg, SearchItemDiv } from "../style/Style";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSearch, loadImages } from "../slices/searchSlice/SearchSlice";

export function Search(props) {
    const search = useSelector(selectSearch);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(loadImages('beach'));
    },[dispatch]);
    return (
        <MainDiv>
            {
                search.images.map((image) => {
                    return (<SearchItemDiv key={'div' + image.id}>
                        <SearchImg src={image.urls.regular} alt={image.description} key={'img' + image.id}/>
                        <SearchFavButton key={'fav' + image.id}/>
                        </SearchItemDiv>);
                })
            }
        </MainDiv>
    );
}