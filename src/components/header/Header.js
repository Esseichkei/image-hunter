import {HeaderDiv, SpacerDiv, HeaderInput} from "../../style/Style";

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