import styled from "styled-components/native";

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    background-color: #16171B;
    justify-content: center;
    align-items: center;
`;

export const InputContainer = styled.View`
    margin-top: 48px;
`;

export const ImageContainer = styled.View``;

export const ForgotPasswordButton = styled.TouchableOpacity``;

export const ForgotPasswordText = styled.Text`
    font-size: 14px;
    color: #fff;
    font-weight: 500;
    line-height: 20px;
    margin-top: 34px;
`;

export const ErrorMessageText = styled.Text`
    font-size: 14px;
    color: #f00;
    font-weight: 500;
    text-align: center;
`;