import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";
import { typography } from "./typography";

export const GlobalStyle = createGlobalStyle`
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

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;
