import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: ${(props) => props.theme.color.black};
  color: ${(props) => props.theme.color.white};
  font-size: 14px;
`;

export const LinksContainer = styled.div`
  @media (max-width: 650px) {
    font-size: 11px;
  }
`;

export const LinkStyled = styled(NavLink)`
  padding: 1rem;
  &.active {
    text-decoration: underline;
  }
  &:visited {
    color: inherit;
  }
  &:hover {
    background-color: #201917;
  }
`;
