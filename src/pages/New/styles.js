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

  > main {
    > .firstRow {
      display: flex;
      flex-direction: row;
      > .title {
        max-width: 50%;
        margin-right: 40px;

        > input {
          padding-left: 16px;
        }
      }

      > .rating {
        max-width: 50%;

        > input {
          padding-left: 16px;
        }
      }
    }

    > textarea {
      background: ${({theme }) => theme.COLORS.INPUT_BACKGROUND };
      width: 100%;
      border-radius: 10px;
      border: none;
      margin: 40px 0px;
      height: 274px;

      padding: 19px 16px;

      color: ${({ theme }) => theme.COLORS.WHITE };
      resize: none;
    }

    > .markersTitle {
      margin-bottom: 24px;
      color: ${({ theme }) => theme.COLORS.GRAY_300 };
      font-weight: 400;
      font-size: 20px;
    }

    
    > .tags {
        display: flex;
        flex-direction: row;
        align-items: center;

        padding: 16px;
        border-radius: 8px;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BLACK };
        gap: 24px;
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
