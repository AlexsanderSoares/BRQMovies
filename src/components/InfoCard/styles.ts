import styled from "styled-components/native";

export const Container = styled.View`
    background-color: #2E2F33;
    width: 46%;
    height: 76px;
    border-radius: 8px;
    padding: 8px 0 0 8px;
    margin-bottom: 16px;
    margin-right: 16px;
`; 

export const IconContainer = styled.View`
    width: 24px;
    height: 24px;
    background-color: #16171B;
    border-radius: 12px;
    justify-content: center;
    align-items: center;
`;

export const LabelContainer = styled.View`
    flex-direction: row;
`;
export const Label = styled.Text`
    font-size: 14px;
    line-height: 24px;
    font-weight: 700;
    color: #EC8B00;
    padding-left: 8px;
`;

export const CardText = styled.Text`
    font-size: 20px;
    line-height: 36px;
    font-weight: 700;
    color: #fff;
`;