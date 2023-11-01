// Reference https://github.dev/emotion-js/emotion/blob/26ded6109fcd8ca9875cc2ce4564fee678a3f3c5/packages/react/src/keyframes.js#L24
import {CSSInterpolation, serializeStyles} from '@emotion/serialize'
import {createMemo, JSX, useContext} from "solid-js";
import hashFunc from "@emotion/hash"
import {AniqueStyledEngineContext} from "./engine";
import {useTheme} from "./theme";
import {injectStyles} from "./injectStyle";
import {KeyframesEle} from "./keyframes";

type GlobalStylesComponent = (() => JSX.Element)

type AniqueInterpolation = CSSInterpolation | ((() => string)) | KeyframesEle

function aniqueStylesPreprocess(args : Array<TemplateStringsArray | CSSInterpolation>) : Array<TemplateStringsArray | CSSInterpolation> {
    // return args
    let newArg : (TemplateStringsArray | CSSInterpolation)[] = []
    for(const arg of args) {
        if((arg as any).__evaluate != null) {
            newArg.push((arg as any).__evaluate)
        } else {
            newArg.push(arg)
        }
    }
    return newArg
}

function createGlobalStyle(
    template: TemplateStringsArray,
    ...args: Array<AniqueInterpolation>
): GlobalStylesComponent

function createGlobalStyle(...args: Array<AniqueInterpolation>): GlobalStylesComponent

function createGlobalStyle(...args: Array<any>): GlobalStylesComponent {
    return () => {
        const engine = useContext(AniqueStyledEngineContext)
        const serialized = createMemo(() => serializeStyles(aniqueStylesPreprocess(args), undefined, {
            get theme() {
                return useTheme()
            }
        }))
        const serStyles = serialized()
        const hashName = hashFunc(serStyles.styles)
        const styles = serStyles.styles
        injectStyles(() => styles, () => hashName, engine.nonce)
        return null
    }
}

export default createGlobalStyle