//import { MainDiv } from "../style/Style";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSearch, loadImages } from "../slices/searchSlice/SearchSlice";

export function Search(props) {
    const search = useSelector(selectSearch);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(loadImages('cat'));
    },[])
    return (
        <p>track your prey, good hunter </p>
    );
}