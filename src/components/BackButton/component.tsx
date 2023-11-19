import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BackButtonWrapper } from './styles';
import { Arrow } from '../../assets/icons';

const BackButton = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity onPress={handlePress} testID="backButton">
        <BackButtonWrapper>
            <Arrow/>
        </BackButtonWrapper>
    </TouchableOpacity>
  );
};

export {BackButton};
