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

export const Content = styled.div`
  padding: 40px 106px 93px 123px;
  grid-area: "content";

  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.COLORS.PINK};
  }

  > section {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 40px;

    > h1 {
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-family: "Roboto Slab";
      font-size: 36px;
      font-weight: 500;
    }
  }
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
