import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.INPUT_BACKGROUND };
    color: ${({ theme }) => theme.COLORS.INPUT_PLACEHOLDER };

    margin-bottom: 8px;
    border-radius: 10px;

    > input {
        height: 56px;
        width: 100%;
        padding: 12px;

        color: ${({ theme }) => theme.COLORS.WHITE };
        background: transparent;
        border: 0;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.INPUT_PLACEHOLDER };
        }
    }

    > svg {
      margin-left: 16px;
    }
`;