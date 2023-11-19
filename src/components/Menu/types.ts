import { ReactElement } from "react"

export type MenuOptions = {
    id: string,
    title: string,
    onPress: () => void,
    Icon: () => ReactElement 
}

export type MenuProps = {
    options: MenuOptions[]
}