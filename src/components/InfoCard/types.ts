import { ReactElement } from "react";

export interface Props {
    label: string;
    text: string;
    Icon: () => ReactElement 
}