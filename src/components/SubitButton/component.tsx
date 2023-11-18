import React from 'react';
import { TouchableOpacityProps, View } from 'react-native';

import { Container, Button, ButtonText } from './styles';

const SubitButton: React.FC<{active?: boolean, label: string} & TouchableOpacityProps> = ({ active, label, ...props }) => {
    return (
        <Container>
            <Button active={active} disabled={!active} {...props}>
                <ButtonText active={active}>
                    {label}
                </ButtonText>
            </Button>
        </Container>
    );
}

export {SubitButton};