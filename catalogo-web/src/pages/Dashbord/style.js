import styled from "styled-components";
const  colorMain =" rgb(240, 240, 240)"

export const Container=styled.div`
    height : 100%;
    width:100%;
    position:absolute;
    display:flex;
    flex-direction: column;
`;

export const Mind=styled.div`
    padding:8px;
    width:100%;
    height: 70px;
    background:${colorMain};
    display:flex;

    & div{
        margin-left:15px;
    }

    & Input,button{
        cursor:pointer;
        border:none;
        padding:5px;
        height:35px;
        font-size:18px;
        background:none;
    }

    & button{
        padding:9px;
    }

    & img{
        width:18px;
        height:18px;
    }

    & p{
        font-family: 'Audiowide', cursive;
        padding:15px;
        font-size:22px;
        color:#8b0000;
        font-weight: bold;
    }

    & form{
        background:white;
        padding:5px;
        height:50px;
        border-radius:35px;
    }
`;
export const Room=styled.div`
    height:100%;
    width:100%;
    display:flex;
    flex-direction:row;
`;

export const Notes=styled.div`
    height:100%;
    width:20%;
    max-width:20%;
    background:${colorMain};
    padding:19px;
    display:flex;
    flex-direction: column;
    & img{
        align-self: end;
        width:28px;
        height:28px;
    }
    & button{
        cursor:pointer;
        border:none;
        padding:5px;
        height:35px;
        font-size:18px;
        background:none;
        float:rigth;
    }
`;

export const NewLeaf= styled.div`
    width:225px;
    display:flex;
    flex-direction: row;
    max-width:100%;
    word-wrap: break-word;
    padding : 10px;
    margin-top:7px;
    margin-bottom:15px;
    border-radius:2px;
    background:#fff;  


    & form{
        display: flex;
    }

    & input,button{
        cursor:pointer;
        border:none;     
        background:none;
        height:35px;
        font-size:15px;
        font-family: 'Courier New', Courier, monospace;
    }

    & img{
        width:28px;
        height:28px;
    }

    &:hover{
        box-shadow: 0 1px 2px 0 rgba(0,0,0,0.5555);
                   
    }
`;

export const ReWrite = styled.textarea`
    border:none;
    resize:none;
    height:100%;
`;

export const Word = styled.div`
    background:none;
    border:none;
    width:100%;
    max-width:75%;
`;
export const Leaf = styled.text`
    width:225px;
    display:flex;
    flex-direction: row;
    max-width:100%;
    word-wrap: break-word;
    padding : 10px;
    margin-top:7px;
    margin-bottom:15px;
    border-radius:2px;
    background:#fff;  

    & p{
        min-width:100%;
        max-width:75%;
    }

    & form{
        display: flex;
        flex-direction: column;
    }

    a textarea{
        border:none;
    }

    & img{
        width:28px;
        height:28px;
    }

    &:hover{
        box-shadow: 0 1px 2px 0 rgba(0,0,0,0.300);
        & button{
            cursor:pointer;
            border:none;     
            background:none;
            visibility:visible;
        }
    }
`;
export const Writing=styled.input`
    width:100%;
    max-width:100%;
    word-wrap: break-word;
    background:none;
    
  
`;

export const ActNotes = styled.div`
    max-width:15%;
    display:flex;
    flex-direction: column;
    & button{
        padding-left:8px;
    }
    & img{
        padding:0;
        width:18px;
        height:18px;
    }

`;

export const SideNav=styled.div`
    margin:0;
    display:flex;
    flex-direction: column;
    justify-content: start;
    background: ${colorMain};
    width:75px;
    min-height:100%;
    
    & div {
        margin-top: 25px;
        display:flex;
        align-items: center;
        flex-direction: column;
        width:100%;
    }

    & img{
        text-align: center;
        font-weight: bold;
        text-decoration: none;
        color:black;
        margin:0;
        border-left: 4px solid ${colorMain};
        background:none;
        cursor:pointer;
        padding:15px 10px 15px 10px;
        width:100%;
        height:58px;

        
    }

     & img:hover{
      color:black;
      border-left:4px solid #8b0000;


    @media screen and ( max-width:982px){
        margin:15px;

        & p {
            font-size:42px;
        }

          
    }
}
`;
export const Desk=styled.div`
    background:${colorMain};   
    height:100%;
    width:1600px;
    max-width:90%;
    color:blue;
`;

export const ObjectInHand=styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const Hand=styled.div`
justify-content: center;
    min-height:100%;
    width:100%;
    background:rgb(202, 202, 202);
    border-radius:12px 12px 0 0;
`;
export const SmallWindow = styled.div`
    padding:5px;
    background: white;
    height:245px;
    width:290px;
    margin: 15px;
    border-radius:9px;

    &:hover{
        box-shadow: 0 13px 13px 0 rgba(0,0,0,0.5555);
        background-color:#a80303;
    }
}
 
`;

export const LageWindow = styled.canvas`
    padding:5px;
    background: white;
    height:350px;
    width:100%;
    margin: 20px;
    border-radius:9px;

    &:hover{
        box-shadow: 0 13px 13px 0 rgba(0,0,0,0.5555);
        background-color:#a80303;
    }
}
 
`;

