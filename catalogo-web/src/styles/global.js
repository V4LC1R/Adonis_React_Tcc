import {  createGlobalStyle } from "styled-components";

import "font-awesome/css/font-awesome.css";

const GlobalSyle= createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  outline: 0;
}
body, html {
  background: #eee;
  font-family: 'Helvetica Neue', 'Helvetica', Arial, sans-serif;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  height: 100%;
  width: 100%;
}
.aa-b {
  color:white;
display:flex;
justify-content: center;
padding:10px;
}
.clickLink{
    margin:0;
    border:none;
    background:none;
    font-size:22px;
    cursor:pointer;
    padding:18px;
    margin:4px;
    
    &:hover{
      
        color:black;
        background:white;
        box-shadow: 0 13px 13px 0 rgba(0,0,0,0.5555);
    }
}


`;

export default GlobalSyle