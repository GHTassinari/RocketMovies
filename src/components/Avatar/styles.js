import styled from "styled-components";

export const Container = styled.div`
  height: ${({ size }) => (size ? `${size}px` : "64px")};
  width: ${({ size }) => (size ? `${size}px` : "64px")};
  border-radius: ${({ size }) => (size ? `${size / 2}px` : "32px")};
  border: 1px solid ${({ theme }) => theme.COLORS.BORDER_GRAY};
  background: url(https://github.com/GHTassinari.png) no-repeat center center;
  background-size: ${({ size }) => (size ? `${size}px ${size}px` : "64px 64px")};
`;
