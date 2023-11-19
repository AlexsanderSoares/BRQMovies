import styled from "styled-components/native";

export const Container = styled.View`
position: relative;
`; 

export const Button = styled.TouchableOpacity<{isMenuVisible: boolean}>`
    width: 24px;
    height: 24px;
    border-radius: 13px;
    padding: 5px;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.isMenuVisible ? '#EC8B00': 'transparent'};
`;

export const MenuContainer = styled.View`
    width: 120px;
    height: 50px;
    background-color: #2E2F33;
    padding: 5px;
    border-radius: 8px;
    position: absolute;
    top: 50px;
    right: 10px;
`;

export const MenuOption = styled.TouchableOpacity`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const MenuOptionTitle = styled.Text`
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    color: #fff;
    text-align: center;
    margin-left: 8px;
`;