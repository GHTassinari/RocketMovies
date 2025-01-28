import styled from "styled-components";
import { Button } from "../../components/Button";
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
  grid-area: "content";
  padding: 0 123px;

  overflow-y: scroll;

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
    margin: 48px 0 12px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    > h1 {
      font-weight: 400;
      font-size: 32px;
      line-height: 42px;
    }
  }

  > .movieWrapper {
    margin-right: 8px;
  }
`;

export const Add = styled(Button)`
  padding: 32px;
  width: 180px;

  > svg {
    margin-right: 8px;
  }
`;

export const ButtonWrapper = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
