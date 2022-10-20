import styled from "styled-components";
import { Link } from "react-router-dom";
import heart_img from './img/Love_Heart_symbol.svg';
import download_img from './img/download.svg';
import edit_img from './img/edit.svg';
import trashcan_img from './img/trashcan.svg';
import check_img from './img/check.svg';
import cross_img from './img/cross.svg';

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
    box-sizing: border-box;
    margin: 1rem;
    padding: 1rem;
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
    background-image: url(${heart_img});
    background-size: 65%;
    background-position: center;
    background-repeat: no-repeat;
`;
// Collection
export const CollectionDiv = styled.div`
    margin: 1rem;
    padding: 1rem;
    width: 100%;
    background-color: #D9D9D9;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const CollectionDetails = styled.div`
    margin: 0.5rem;
    padding: 0.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export const CollectionEdit = styled.button`
    margin: 0.2rem;
    padding: 0.2rem;
    height: 2rem;
    width: 2rem;
    border: 1px none transparent;
    background-color: #F0F0F0;
    background-image: url(${edit_img});
    background-size: 65%;
    background-position: center;
    background-repeat: no-repeat;
`;
export const CollectionDelete = styled.button`
    margin: 0.2rem;
    padding: 0.2rem;
    height: 2rem;
    width: 2rem;
    border: 1px none transparent;
    background-color: #F0F0F0;
    background-image: url(${trashcan_img});
    background-size: 65%;
    background-position: center;
    background-repeat: no-repeat;
`;
export const CollectionDownload = styled.button`
    margin: 0.2rem;
    padding: 0.2rem;
    height: 2rem;
    width: 2rem;
    border: 1px none transparent;
    background-color: #F0F0F0;
    background-image: url(${download_img});
    background-size: 65%;
    background-position: center;
    background-repeat: no-repeat;
`;
export const EmptyDiv = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const OrderByDiv = styled.div`
    margin: 0.5rem;
    padding: 0.5rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 60%;
    min-width: 200px;
`;
export const OrderByButton = styled.button`
    margin: 0.3rem;
    padding: 0.3rem;
    border-radius: 0.3rem;
    background-color: ${props => props.active ? '#D9D9D9' : 'transparent'};
    border: ${props => props.active ? "2px solid black" : "2px solid transparent"};
`;
//Description
export const DescriptionBlocker = styled.div`
    top: 0;
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(224, 224, 224, 0.8);
    z-index: 2;
    display: ${props => props.show ? 'flex' : 'none'};
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const DescriptionDiv = styled.div`
    background-color: #F0F0F0;
    border-radius: 2rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const DescriptionTitle = styled.h4`
    text-align: center;
`;
export const DescriptionInput = styled.input`
    border: 1px none transparent;
    padding: 1rem;
    margin: 1rem;
    width: 14rem;
    border-radius: 1rem;
    background-color: #D9D9D9;
`;
export const DescriptionButtonCluster = styled.div`
    padding: 0.5rem;
    margin: 0.5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
export const DescriptionAccept = styled.button`
    margin: 0.2rem;
    padding: 0.2rem;
    height: 2rem;
    width: 2rem;
    border: 1px none transparent;
    background-color: #F0F0F0;
    background-image: url(${check_img});
    background-size: 65%;
    background-position: center;
    background-repeat: no-repeat;
`;
export const DescriptionCancel = styled.button`
    margin: 0.2rem;
    padding: 0.2rem;
    height: 2rem;
    width: 2rem;
    border: 1px none transparent;
    background-color: #F0F0F0;
    background-image: url(${cross_img});
    background-size: 65%;
    background-position: center;
    background-repeat: no-repeat;
`;
//Responsive design
export const ResponsiveGallery = styled.div`
    display: flex;
    width: 80%;
    flex-direction: column;
    align-items: center;
    @media (min-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
      }
`;
export const ResponsiveGalleryItem = styled.div`
    width: 100%;
    display: flex;
    @media (min-width: 768px) {
        width: 50%;
      }
`;