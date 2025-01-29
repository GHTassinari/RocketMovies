import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: hidden;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
    "header"
    "content";
`;

export const Return = styled(Link)`
  display: flex;
  text-decoration: none;
  color: inherit;
  align-items: center;

  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.PINK};

  > svg {
    margin-right: 8px;
  }
`;

export const Content = styled.div`
  padding: 40px 106px 156px 123px;
  grid-area: "content";

  > section {
    .titleWrapper {
      display: flex;
      align-items: center;
      margin-top: 24px;
      flex-direction: row;

      gap: 19px;

      > h1 {
        color: ${({theme}) => theme.COLORS.WHITE };
        font-family: "Roboto Slab";
        font-size: 36px;
        font-weight: 500;

      }
    }
  }
`;
