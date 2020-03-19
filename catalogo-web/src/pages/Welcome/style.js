import styled from "styled-components";
import car_tools from "../../assets/car_tools.jpg"

export const Container=styled.div`
    background-image: url(${car_tools});
    background-repeat: no-repeat;
    background-size: cover;
    min-height:100%;
    min-width:100%;
    position:absolute;
    color:white;
`;

export const TopNav=styled.div`
   color:white;
   display:flex;
   justify-content: center;
   padding:10px;

`;

export const ButtonLink= styled.button`
    color:white;
    margin:0;
    border:none;
    background:none;
    font-size:28px;
    cursor:pointer;
    padding:9px;
    background:#680000;
    border-radius:3px;
    margin-top:3px;
    color: white;

    &:hover{
        box-shadow: 0 13px 13px 0 rgba(0,0,0,0.5555);
    }
`;

export const WelcomeMsg=styled.div` 
color:white;
display:flex;
justify-content: center;
padding:10px;
  
}
`;

export const Context=styled.div`
    & p{
        font-size:20px;
        align-self: center;
       
    }
    & h1{
        align-self: center;
        font-size:270px;
        color: #680000;
        padding:0;
        height:260px;
        
        margin: 0px;
        
}
`;