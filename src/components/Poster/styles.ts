import styled from "styled-components/native";
import { Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

export const Container = styled.View`
    height: ${Math.floor(windowHeight * 0.7)}px;
    background-color: red;
`; 

export const BackgroundImage = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-items: center;
`;