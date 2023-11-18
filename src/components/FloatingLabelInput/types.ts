import { ReactElement, FC } from "react"
import { TextInputProps } from "react-native"

export type ComponentProps = {
    label: string,
    value: string,
    LeftIcon?: () => ReactElement,
    RightIcon?: () => ReactElement,
} & TextInputProps
