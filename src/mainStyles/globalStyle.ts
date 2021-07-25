import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";
import { typography } from "./typography";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Roboto", sans-serif;
    font-size: ${typography.standard};
    background-color: ${colors.backgroundMain};
    color: ${colors.fontMain};
  }

  img {
    pointer-events: none;
  }
`;
