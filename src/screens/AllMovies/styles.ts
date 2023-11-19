import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: #16171B;
    padding-top: 24px;
    padding-left: 8px;
    padding-right: 8px;
    padding-bottom: 24px;
    flex-direction: row;
`;

export const EmptyListComponent = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #16171B;
`;

export const Message = styled.Text`
    font-size: 25px;
    font-weight: bold;
    color: #fff;
`;

export const RetryButton = styled.TouchableOpacity`
    width: 200px;
    height: 50px;
    justify-content: center;
    align-items: center;
    background-color: #EC8B00;
    border-radius: 8px;
    margin-top: 15px;
`;

export const RetryButtonText = styled.Text`
    font-size: 20px;
    font-weight: 700;
    color: #fff;
`;