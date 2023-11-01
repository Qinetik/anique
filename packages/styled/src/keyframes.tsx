// Reference https://github.dev/emotion-js/emotion/blob/26ded6109fcd8ca9875cc2ce4564fee678a3f3c5/packages/react/src/keyframes.js#L24
import {CSSInterpolation, serializeStyles} from '@emotion/serialize'
import {createMemo, JSX, JSXElement, useContext} from "solid-js";
import hashFunc from "@emotion/hash"
import {AniqueStyledEngineContext} from "./engine";
import {injectStyles} from "./injectStyle";
import {useTheme} from "./theme";

export type KeyframesEle = ((() => JSXElement) & ({
    animationName: string
    toString: () => string
}))

function keyframes(
    template: TemplateStringsArray,
    ...args: Array<CSSInterpolation>
): KeyframesEle

function keyframes(...args: Array<CSSInterpolation>): KeyframesEle

function keyframes(...args: any[]): KeyframesEle {

    const engine = useContext(AniqueStyledEngineContext)
    const serStyles = serializeStyles(args, undefined, {
        get theme() {
            return useTheme()
        }
    })
    const hashName = hashFunc(serStyles.styles)
    const kfName = engine.keyframesPattern(hashName)
    const styles = `@keyframes ${kfName}{${serStyles.styles}}`

    const Styled = () => {
        injectStyles(() => styles, () => hashName, engine.nonce)
        return null
    }
    (Styled as any).__evaluate = kfName
    Styled.animationName = kfName
    Styled.toString = () => kfName;
    return Styled

}

export {keyframes}