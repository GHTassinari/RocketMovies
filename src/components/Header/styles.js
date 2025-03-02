import styled from "styled-components";
import { Input } from "../../components/Input";
import { Link } from "react-router-dom";

export const Container = styled.header`
  grid-area: header;
  height: 116px;
  width: 100%;
  display: flex;
  padding: 24px 123px;
  gap: 64px;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BORDER_GRAY};
`;

export const Title = styled(Link)`
  color: ${({ theme }) => theme.COLORS.PINK};
  font-weight: 700;
  font-size: 24px;
  line-height: 31.65px;
`;

export const Search = styled(Input)`
  padding: 19px 24px;
  margin-bottom: 0;
  height: 56px;

  > input {
    padding: 0;
    font-size: 14px;
    line-height: 18px;
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  > .profileInfo {
    display: flex;
    flex-direction: column;
    margin-right: 9px;
    align-items: flex-end;

    > .profileUsername {
      font-weight: 700;
      font-size: 14px;
      line-height: 18px;
      white-space: nowrap;
    }

    > span {
      font-weight: 400;
      size: 14px;
      line-height: 18px;

      cursor: pointer;

      color: ${({ theme }) => theme.COLORS.INPUT_PLACEHOLDER};
    }
  }
`;