import styled from "styled-components";

export const Container = styled.div`
    
`;

export const MsgCad=styled.div`


`;

export const FormCad = styled.form`
    padding:10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    & input {
        padding: 10px;
        margin:3px;
        width: 320px;
    }
    label{
        
    }
`;

export const Top=styled.div`
    color:white;
    display:flex;
    justify-content: center;
    padding:0px;
    background-color: #aaa;
    height:50px;
    
    & a{
        text-decoration: none;
        color:black;
        border:none;
        background:none;
        font-size:20px;
        cursor:pointer;
        padding:10px;
        margin:3px;
    }

     & a:hover{
      color:black;
      background:white;
      box-shadow: 0 3px 5px 0 rgba(0,0,0,0.5555);
  
      & a {
        color:black;
      }
    }
`;