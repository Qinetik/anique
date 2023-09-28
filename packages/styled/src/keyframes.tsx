// Reference https://github.dev/emotion-js/emotion/blob/26ded6109fcd8ca9875cc2ce4564fee678a3f3c5/packages/react/src/keyframes.js#L24
import {CSSInterpolation, Keyframes, serializeStyles} from '@emotion/serialize'
import {JSX} from "solid-js";
import {getNameSerializedStyles, MountedStyles} from "./Mounter";
import hashFunc from "@emotion/hash"

type KeyframesEle = (() => JSX.Element) & {
    animationName: string
}

function keyframes(
    template: TemplateStringsArray,
    ...args: Array<CSSInterpolation>
): KeyframesEle

function keyframes(...args: Array<CSSInterpolation>): KeyframesEle

function keyframes(...args: any[]): KeyframesEle {
    const styles = serializeStyles(args)
    const hash = hashFunc(styles.styles)
    const name = getNameSerializedStyles(hash, true)
    const Styled = () => {
        return (
            <MountedStyles
                styles={styles}
                areKeyFrames={true}
                name={name}
            />
        )
    }
    Styled.animationName = name
    return Styled
}

export {keyframes}