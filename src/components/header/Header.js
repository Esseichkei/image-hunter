import styled from "styled-components";

const HeaderDiv = styled.div`
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
    `;
const SpacerDiv = styled.div`
    height: 73px;
    `;
const HeaderInput = styled.input`
    box-sizing: border-box;
    background-color: #F0F0F0;
    border-style: none;
    border-radius: 3px;
    padding: 0.3rem;
    `;


export function Header(props) {
    return (
        <SpacerDiv>
            <HeaderDiv>
                <p>Image Hunter</p>
                <HeaderInput type="text" placeholder="Search photos of..."/>
            </HeaderDiv>
        </SpacerDiv>
    );
}