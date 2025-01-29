import styled from "styled-components";

export const Container = styled.p`
  font-size: 16px;
  font-weight: 400;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  width: 100%;
`;
