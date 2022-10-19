import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { editDescriptionAtId } from "../../slices/collectionSlice/CollectionSlice";
import { DescriptionBlocker, DescriptionDiv, DescriptionInput, DescriptionButtonCluster, DescriptionAccept, DescriptionCancel, DescriptionTitle } from "../../style/Style";

export function Description(props) { //expected props: imagedata, function from parent component to toggle display of Blocker, show
    const dispatch = useDispatch();
    const inputField = useRef(null);
    useEffect(() => {
        inputField.current.value = props.imagedata.description;
    }, [props.imagedata.description]);
    const updateDescription = () => {
        dispatch(editDescriptionAtId({id: props.imagedata.id, description: inputField.current.value}));
        props.close();
    }
    const closeDescription = () => {
        props.close();
    }
    return (<DescriptionBlocker show={props.show}>
        <DescriptionDiv>
            <DescriptionTitle>Edit Description</DescriptionTitle>
            <DescriptionInput type="text" ref={inputField}/>
            <DescriptionButtonCluster>
                <DescriptionAccept onClick={updateDescription}/>
                <DescriptionCancel onClick={closeDescription}/>
            </DescriptionButtonCluster>
        </DescriptionDiv>
    </DescriptionBlocker>);
}