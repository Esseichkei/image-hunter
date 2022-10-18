import { SearchFavButton, SearchImg, SearchItemDiv } from "../../style/Style";
import { useState } from "react";

/*function saveToLocalStorage(image) {
}*/

export function SearchItem(props) {
    const [fav, favSetter] = useState('');
    const handleFavIconClick = () => {
        favSetter((value) => value === 'true' ? '' : 'true');

    }
    return (<SearchItemDiv key={'div' + props.imagedata.id}>
                <SearchImg src={props.imagedata.urls.regular} alt={props.imagedata.description} key={'img' + props.imagedata.id}/>
                <SearchFavButton key={props.imagedata.id} onClick={handleFavIconClick} opacity={fav}/>
            </SearchItemDiv>);
}