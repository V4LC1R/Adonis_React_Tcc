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
    
    & a{
        text-decoration: none;
        color:white;
        margin:0;
        border:none;
        background:none;
        cursor:pointer;
        padding:18px;
        margin:4px;
    }

     & a:hover{
      color:black;
      background:white;
      box-shadow: 0 13px 13px 0 rgba(0,0,0,0.5555);
  
      & a {
        color:black;}
      }

    @media screen and ( max-width:982px){
        margin:15px;

        & a {
            font-size:42px;
        }

          
    }
}
`;

export const ButtonLink= styled.button`
    color:white;
    width:250px;
    height:75px;
    background-color:#8b0000;
    border:none;
    border-radius:1px;
    padding:5px;
    font-size:25px;
    cursor: pointer;
    
    &:hover{
        box-shadow: 0 13px 13px 0 rgba(0,0,0,0.5555);
        background-color:#a80303;
    }

    @media screen and (max-width:980px){
        width:380px;
        height:105px;
        font-size:35px;
    }
`;

export const WelcomeMsg=styled.div` 
    color:white;
    display:flex;
    justify-content: center;
    padding:10px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    display: block;

    @media screen and (max-width:982px){
        top: 35%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
    }
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
    
    @media screen and (max-width:980px){
        & h1{
            font-size:315px;
            height:290px;
        }

        & p{
            font-size:40px;
            text-align: center;
        }
    }
   
`;