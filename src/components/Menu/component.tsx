import React, {useState} from 'react';

import {
  Button,
  Container,
  MenuContainer,
  MenuOption,
  MenuOptionTitle,
} from './styles';
import {MenuBlack, OptionsIcon} from '../../assets/icons';
import {Modal} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {MenuProps} from './types';

const Menu: React.FC<MenuProps> = ({options}) => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(oldState => !oldState);
  };

  const onButtonPress = () => {
    toggleMenu();
  };
  return (
    <Container>
      <Button isMenuVisible={isMenuVisible} onPress={onButtonPress}>
        {isMenuVisible ? <MenuBlack /> : <OptionsIcon />}
      </Button>
      <Modal transparent visible={isMenuVisible}>
        <SafeAreaView
          style={{flex: 1, zIndex: -1}}
          onTouchEnd={() => setMenuVisible(false)}>
          <MenuContainer>
            {options.map(option => (
              <MenuOption onPress={option.onPress} key={option.id}>
                {option.Icon()}
                <MenuOptionTitle>{option.title}</MenuOptionTitle>
              </MenuOption>
            ))}
          </MenuContainer>
        </SafeAreaView>
      </Modal>
    </Container>
  );
};

export {Menu};
