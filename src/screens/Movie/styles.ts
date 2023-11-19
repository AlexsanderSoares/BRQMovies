import { Animated } from "react-native";
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

export const Header = styled(Animated.View)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 20px;
  z-index: 1;
  align-items: center;
  background-color: #2E2F33;
`;

export const HeaderButtons = styled(Animated.View)`
  position: absolute;
  top: 15px;
  left: 0;
  right: 0;
  padding: 20px;
  z-index: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderContent = styled(Animated.View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderText = styled.Text`
  font-size: 24px;
  margin-top: 15px;
  color: white; /* Cor do texto do cabeçalho */
`;
