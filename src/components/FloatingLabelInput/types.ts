import { ReactElement } from "react"
import { TextInputProps } from "react-native"

export type ComponentProps = {
    label: string,
    value: string,
    error: boolean,
    LeftIcon?: () => ReactElement,
    RightIcon?: () => ReactElement,
} & TextInputProps
