import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    padding: 0 15px;
`;

export const Button = styled.TouchableOpacity<{active?: boolean}>`
    height: 40px;
    margin-top: 48px;
    padding: 10px 24px 10px 24px;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.active ? '#EC8B00' : '#A9A9A9'};
    border-radius: 100px;
`;

export const ButtonText = styled.Text<{active?: boolean}>`
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: ${props => props.active ? '#FFFFFF' : '#2E2F33'};
`;