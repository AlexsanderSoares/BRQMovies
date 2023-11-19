import styled from "styled-components/native";
import { Props } from "./types";

export const Container = styled.View<Props>`
    background-color: ${props => props.changeColor ? '#EC8B00' :'#FFFFFF'};
    width: 24px;
    height: 24px;
    border-radius: 13px;
    justify-content: center;
    align-items: center;
`; 