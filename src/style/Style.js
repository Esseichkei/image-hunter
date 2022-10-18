import styled from "styled-components";
import { Link } from "react-router-dom";
import img from './img/Love_Heart_symbol.svg';

//App
export const MainDiv = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

//Header
export const HeaderDiv = styled.div`
    box-sizing: border-box;
    margin: 0;
    padding: 20px;
    width: 100%;
    height: 73px;
    position: fixed;
    top: 0;
    background-color: #D9D9D9;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
`;
export const SpacerDiv = styled.div`
    height: 73px;
`;
export const HeaderInput = styled.input`
    box-sizing: border-box;
    background-color: #F0F0F0;
    border-style: none;
    border-radius: 3px;
    padding: 0.3rem;
`;

//Tabs
export const ContainerDiv = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 20px;
    width: 40%;
    min-width: 300px;
    border-bottom: 5px solid #D9D9D9;
`;
export const StyledTabLink = styled(Link)`
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    background-color: ${props => props.backgroundcolor ? '#F0F0F0' : 'transparent'};
`;

//Search
export const SearchItemDiv = styled.div`
    margin: 10px;
    width: 80%;
    position: relative;
`;
export const SearchImg = styled.img`
    width: 100%;
    height: auto;
`;
export const SearchFavButton = styled.button`
    width: 4rem;
    height: 4rem;
    opacity: ${props => props.opacity ? '100%' : '50%'};
    position: absolute;
    padding: 0.5rem;
    border-radius: 0.5rem;
    bottom: 2rem;
    right: 2rem;
    border: 1px none transparent;
    background-color: #F0F0F0;
    background-image: url(${img});
    background-size: 65%;
    background-position: center;
    background-repeat: no-repeat;
`;