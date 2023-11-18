import React from 'react';

import { CardText, Container, IconContainer, Label, LabelContainer } from './styles';
import { Props } from './types';

const InfoCard: React.FC<Props> = ({ label, Icon, text }) => {
  return (
    <Container>
        <LabelContainer>
            <IconContainer>
                <Icon/>
            </IconContainer>
            <Label>
                {label}
            </Label>
        </LabelContainer>
        <CardText>
            {text}
        </CardText>
    </Container>
  );
}

export {InfoCard};