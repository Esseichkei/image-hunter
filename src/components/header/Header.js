import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {HeaderDiv, SpacerDiv, HeaderInput} from "../../style/Style";

export function Header(props) {
    const navigate = useNavigate();
    const inputField = useRef(null);
    const onCollection = useLocation().pathname.slice(0, '/collection'.length) === '/collection';
    useEffect(() => {
        inputField.current.value = '';
    }, [onCollection, inputField]) 
    const handleSubmit = (ev) => {
        if(onCollection) {
            if (ev.target.value) {
                navigate("/collection/search/" + ev.target.value);
            } else {
                navigate("/collection/");
            }
        } else {
            if (ev.target.value) {
                navigate("/search/" + ev.target.value);
            } else {
                navigate("/");
            }
        }
    };
    return (
        <SpacerDiv>
            <HeaderDiv>
                <p>Image Hunter</p>
                <HeaderInput type="text" placeholder={onCollection ? "Filter by description..." : "Search photos with..."} onKeyUp={handleSubmit} ref={inputField}/>
            </HeaderDiv>
        </SpacerDiv>
    );
}