import React from 'react';
import {
  useAnimatedStyle, useSharedValue, withTiming,
} from 'react-native-reanimated';
import {Container, Input, InputContainer, Label} from './styles';
import { ComponentProps } from './types';

const FloatingLabelInput = ({label, LeftIcon, RightIcon, error, ...props}: ComponentProps) => {
  const isFocused = useSharedValue(false);

  const labelStyle = useAnimatedStyle(() => {
    return {
      top: withTiming(isFocused.value ? 8 : 20, { duration: 200 }),
      fontSize: withTiming(isFocused.value ? 12 : 16, { duration: 200 }),
    };
  });

  const handleFocus = () => {
    isFocused.value = true;
  };

  const handleBlur = () => {
    isFocused.value = !!props.value;
  };

  return (
    <Container error={error} testID={error ? 'floating-label-input-container-error' : 'floating-label-input-container'}>
      {LeftIcon && <LeftIcon />}
      <InputContainer>
        <Label style={labelStyle}>{label}</Label>
        <Input
          {...props}
          onFocus={handleFocus}
          selectionColor={"#fff"}
          onBlur={handleBlur}
          underlineColorAndroid="transparent"
        />
      </InputContainer>
      {RightIcon && <RightIcon />}
    </Container>
  );
};

export {FloatingLabelInput};
