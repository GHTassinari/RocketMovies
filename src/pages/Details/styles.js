import styled from "styled-components";
import { Link } from "react-router-dom";

import { Tag } from "../../components/Tag";

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
    .titleWrapper {
      display: flex;
      align-items: center;
      margin-top: 24px;
      flex-direction: row;

      gap: 19px;

      > h1 {
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-family: "Roboto Slab";
        font-size: 36px;
        font-weight: 500;
      }
    }

    .tagWrapper {
      margin-top: 40px;
      gap: 8px;
    }

    .noteInfoWrapper {
      display: flex;
      align-items: center;
      justify-content: start;
      flex-direction: row;

      margin-top: 24px;

      > h6 {
        font-size: 16px;
        font-weight: 400;
        text-align: justify;

        margin-left: 8px;

        color: ${({ theme }) => theme.COLORS.WHITE};
      }

      > svg {
        width: 15.178px;
        height: 16px;
        margin-left: 16px;
        margin-right: 8px;

        color: ${({ theme }) => theme.COLORS.PINK};
      }
    }
  }

  main {
    margin-top: 40px;

    > p{
     color: ${({ theme }) => theme.COLORS.WHITE };
     text-align: justify;
     font-size: 16px;
     font-weight: 400;
     line-height: normal; 
    }
  }
`;

export const DetailsTag = styled(Tag)`
  font-size: 12px;
  font-weight: 400;
  padding: 8px 16px;
  border-radius: 8px;
  color: ${({ theme }) => theme.COLORS.WHITE };
  background-color: ${({ theme }) => theme.COLORS.CHARCOAL };
`;
