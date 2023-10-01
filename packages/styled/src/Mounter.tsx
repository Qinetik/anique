import {SerializedStyles} from "@emotion/utils"
import {Dynamic} from "solid-js/web";

const MountCache = new Map<string, boolean>

export function getNameSerializedStyles(hash: string, areKeyFrames: boolean) {
    if (areKeyFrames) {
        return "k" + hash
    } else {
        return "c" + hash
    }
}

interface MountedStylesProps {
    name: string
    styles: SerializedStyles,
    areKeyFrames: boolean
}

export function MountedStyles(props: MountedStylesProps) {
    let endCSS: string
    if (props.areKeyFrames) {
        endCSS = `@keyframes ${props.name}{${props.styles.styles}}`
    } else {
        endCSS = `.${props.name}{${props.styles.styles}}`
    }
    // returning the component
    return (
        <style>{`${endCSS}`}</style>
    )
}