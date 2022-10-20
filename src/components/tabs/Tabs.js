import { useLocation } from "react-router-dom";
import {ContainerDiv, StyledTabLink} from "../../style/Style";

export function Tabs(props) {
    const path = useLocation().pathname;
    const inCollection = path.slice(0, '/collection'.length) === '/collection';
    return (
        <ContainerDiv>
            <StyledTabLink to='/' backgroundcolor={!inCollection ? '#F0F0F0' : ''}>
                <h5>Hunt for more</h5>
            </StyledTabLink>
            <StyledTabLink to='/collection' backgroundcolor={inCollection ? '#F0F0F0' : ''}>
                <h5>Your collection</h5>
            </StyledTabLink>
        </ContainerDiv>
    );
}