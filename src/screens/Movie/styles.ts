import styled from "styled-components/native";

export const Container = styled.ScrollView`
    flex: 1;
    background-color: #16171B;
`; 

export const InfoCardsContainer = styled.View`
 margin-top: 32px;
 align-items: center;
 justify-content: center;
`;

export const InfoCardsRow = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const InfoMovie = styled.View`
    padding: 23px 16px;
`;

export const Title = styled.Text`
    font-size: 28px;
    line-height: 36px;
    font-weight: 700;
    color: #fff;
`;

export const SinopseContainer = styled.View`
    padding: 16px 0px 0px 0px;
`;

export const SinopseTitle = styled.Text`
    font-size: 14px;
    line-height: 24px;
    font-weight: 700;
    color: #EC8B00;
    padding-bottom: 16px;
`;

export const SinopseText = styled.Text`
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: #FFF;
`;