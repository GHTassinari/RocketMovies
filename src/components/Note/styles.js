import styled from "styled-components";
import { Description } from "../../components/Description";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;

  width: 100%;
  background-color: ${({ theme }) => `${theme.COLORS.PINK}0D`};

  border: none;
  border-radius: 16px;

  padding: 32px;
  margin: 24px 0;

  > h1 {
    font-size: 24px;
    font-weight: 700;
    color: ${({theme}) => theme.COLORS.WHITE };

    margin-bottom: 8px;
  }
  
  > footer {
    margin-top: 15px;
    gap: 8px;
  }
`;

export const NoteDescription = styled(Description)`
  height: 100%;

  margin-top: 8px;

  color: ${({ theme }) => theme.COLORS.GRAY_300};
`;
