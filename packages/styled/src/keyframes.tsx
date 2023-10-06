// Reference https://github.dev/emotion-js/emotion/blob/26ded6109fcd8ca9875cc2ce4564fee678a3f3c5/packages/react/src/keyframes.js#L24
import {CSSInterpolation, serializeStyles} from '@emotion/serialize'
import {JSX} from "solid-js";
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
    const name = "k" + hash
    const Styled = () => {
        return (
            <style>{`@keyframes ${name}{${styles.styles}}`}</style>
        )
    }
    Styled.animationName = name
    return Styled
}

export {keyframes}