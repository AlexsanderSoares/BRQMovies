import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BackButtonWrapper } from './styles';
import { Arrow, ArrowOrange } from '../../assets/icons';
import { Props } from './types';

const BackButton: React.FC<Props> = ({changeColor}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity onPress={handlePress} testID="backButton" >
        <BackButtonWrapper>
            {changeColor ? <ArrowOrange/> : <Arrow/>}
        </BackButtonWrapper>
    </TouchableOpacity>
  );
};

export {BackButton};
