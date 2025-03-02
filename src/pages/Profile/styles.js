import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.div`
  > header {
    height: 144px;
    background-color: ${({ theme }) => `${theme.COLORS.PINK}0D`};

    padding: 64px 0 0 144px;
  }

  > main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 340px;

    margin: -93px auto 203px;

    > .Avatar {
      position: relative;
      margin-bottom: 64px;

      > label {
        width: 48px;
        height: 48px;

        background-color: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: 7px;
        right: 7px;

        cursor: pointer;

        > input {
          display: none;
        }

        > svg {
          color: ${({ theme }) => theme.COLORS.BACKGROUND_GRAY};
          width: 20px;
          height: 20px;
        }
      }
    }

    > .username,
    > .email {
      > svg {
        color: ${({ theme }) => theme.COLORS.INPUT_PLACEHOLDER};
      }

      > input {
        &::placeholder {
          color: ${({ theme }) => theme.COLORS.WHITE};
        }
      }
    }

    > .email {
      margin-bottom: 24px;
    }

    > button {
      margin-top: 24px;
    }
  }
`;

export const Return = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 8px;

  > svg {
    height: 16px;
    width: 16px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > label {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 16px;
    font-weight: 400;
  }
`;
