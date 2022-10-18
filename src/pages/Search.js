import { MainDiv } from "../style/Style";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSearch, loadImages } from "../slices/searchSlice/SearchSlice";
import { SearchItem } from "../components/searchItem/SearchItem";

export function Search(props) {
    const search = useSelector(selectSearch);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(loadImages(''));
    },[dispatch]);
    return (
        <MainDiv>
            {
                search.images.map((image) => {
                    return <SearchItem imagedata={image} key={'item' + image.id}/>;
                })
            }
        </MainDiv>
    );
}