import styled from "styled-components/native";
import Animated from 'react-native-reanimated';
import { TextInput } from "react-native";

export const Container = styled.View`
  margin-top: 18px;
  position: relative;
  justify-content: center;
  background-color: #2E2F33;
  border-bottom-width: 2px;
  border-color: #fff;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  padding: 0 15px;
`;

export const InputContainer = styled.View`
  margin-top: 3px;
  padding-left: 0px;
`;

export const Label = styled(Animated.Text)`
  position: absolute;
  color: #fff;
  font-size: 16px;
  padding: 0 4px;
  z-index: 2;
  left: 6px;
  top: 8px;
`;

export const Input = styled(TextInput)`
  font-size: 16px;
  margin-top: 10px;
  width: 290px;
  height: 56px;
  padding: 0 10px;
  background-color: #2E2F33;
  color: #fff;
`;