import { useLocation, useNavigate } from "react-router-dom";
import {HeaderDiv, SpacerDiv, HeaderInput} from "../../style/Style";

export function Header(props) {
    const navigate = useNavigate();
    const onCollection = useLocation().pathname.slice(0, '/collection'.length) === '/collection';
    const handleSubmit = (ev) => {
        if (ev.key === "Enter") {
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