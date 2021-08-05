import styled from "styled-components";
import { mediaQuery } from "../../mainStyles/madiaQuery";

export const DashboardWrapper = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: minmax(220px, 0.25fr) 1fr;
  grid-template-rows: 50px 1fr;
  grid-template-areas:
    "sidepanel nav"
    "sidepanel main";

  @media (max-width: ${mediaQuery.standard}) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.2fr 3fr;
    grid-template-areas:
      "nav"
      "main";
  }
`;
