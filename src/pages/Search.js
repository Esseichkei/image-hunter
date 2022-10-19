import { MainDiv } from "../style/Style";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSearch, loadImages } from "../slices/searchSlice/SearchSlice";
import { SearchItem } from "../components/searchItem/SearchItem";
import { useParams } from "react-router-dom";

const searchPath = '/search/';

export function Search(props) {
    const search = useSelector(selectSearch);
    const params = useParams();
    const query = params ? params.query : '';
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(loadImages(query));
    },[dispatch]);
    return (
        <MainDiv>
            {
                search.images.map((image) => {
                    return <SearchItem imagedata={image} key={'sitem' + image.id}/>;
                })
            }
        </MainDiv>
    );
}