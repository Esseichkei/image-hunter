import { useLocation } from "react-router-dom";
import {ContainerDiv, StyledTabLink} from "../../style/Style";

export function Tabs(props) {
    const path = useLocation().pathname;
    const inCollection = path === '/collection';
    return (
        <ContainerDiv>
            <StyledTabLink to='/' backgroundcolor={!inCollection ? '#F0F0F0' : ''}>
                <p>Hunt for more</p>
            </StyledTabLink>
            <StyledTabLink to='/collection' backgroundcolor={inCollection ? '#F0F0F0' : ''}>
                <p>Your collection</p>
            </StyledTabLink>
        </ContainerDiv>
    );
}