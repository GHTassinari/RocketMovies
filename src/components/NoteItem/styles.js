import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, $isnew }) =>
    $isnew ? "transparent" : theme.COLORS.INPUT_BACKGROUND};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: ${({ theme, $isnew }) =>
    $isnew ? `1px dashed ${theme.COLORS.INPUT_PLACEHOLDER}` : "none"};

  border-radius: 10px;
  padding: 16px 0;
  gap: 16px;

  > button {
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    background: none;
    margin-right: 16px;

    > svg {
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }

  > .tag {
    margin-left: 16px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.INPUT_PLACEHOLDER};
    }
  }
`;
