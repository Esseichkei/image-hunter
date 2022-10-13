import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const ContainerDiv = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 20px;
    width: 260px;
    border-bottom: 5px solid #D9D9D9;
`;

const StyledTabLink = styled(Link)`
    margin: 10px;
    background-color: ${props => props.backgroundColor ? '#F0F0F0' : 'transparent'};
`;

export function Tabs(props) {
    const path = useLocation().pathname;
    const inCollection = path === '/collection';
    console.log(path);
    return (
        <ContainerDiv>
            <StyledTabLink to='/' backgroundColor={!inCollection ? '#F0F0F0' : ''}>
                <p>Hunt for more</p>
            </StyledTabLink>
            <StyledTabLink to='/collection' backgroundColor={inCollection ? '#F0F0F0' : ''}>
                <p>Your collection</p>
            </StyledTabLink>
        </ContainerDiv>
    );
}