import styled from "styled-components";

export const NavigationListContainer = styled.nav`
  .navLink {
    text-decoration: none;
    margin-right: 30px;
    text-transform: uppercase;
    color: cornflowerblue;
  }
  .active_navLink {
    color: red;
  }
  .navigation-list {
    margin-top: 20px;
    justify-content: center;
    list-style: none;
    display: flex;
  }
`;
