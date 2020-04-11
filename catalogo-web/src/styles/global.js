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
#ImHere{
   border-bottom:solid 1px white;
}
.Center-Context {
  display:flex;
  justify-content: center;
  padding:10px;
}
`;

export default GlobalSyle