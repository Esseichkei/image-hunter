import { useLocation, useNavigate } from "react-router-dom";
import {HeaderDiv, SpacerDiv, HeaderInput} from "../../style/Style";

export function Header(props) {
    const navigate = useNavigate();
    const onCollection = useLocation().pathname.slice(0, '/collection'.length) === '/collection';
    const handleSubmit = (ev) => {
        if (ev.key === "Enter") {
            if(onCollection) {
                navigate("/collection/search/" + ev.target.value);
            } else {
                navigate("/search/" + ev.target.value);
            }
        }
    };
    return (
        <SpacerDiv>
            <HeaderDiv>
                <p>Image Hunter</p>
                <HeaderInput type="text" placeholder={onCollection ? "Filter by description..." : "Search photos with..."} onKeyDown={handleSubmit}/>
            </HeaderDiv>
        </SpacerDiv>
    );
}