import styled from "styled-components";

export const Container = styled.div`
    
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    display: block;
    width:100%;
`;

export const ErrMsg=styled.p`
    border: solid 3px red;
    padding:16px;
    color:red;

`;