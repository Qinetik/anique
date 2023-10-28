import {CSSInterpolation, serializeStyles} from '@emotion/serialize'
import {createMemo, useContext} from "solid-js";
import {injectStyles} from "./injectStyle";
import hashFunc from "@emotion/hash";
import {AniqueStyledEngineContext} from "./engine";
import {useTheme} from "./theme";
import {isDevelopment} from "./utils";

type CSSFunction = (() => string) & {
    className: string
}

/**
 * Injects the given styles into head and returns the class name to use for these styles
 * @param template
 * @param args
 */
function css(
    template: TemplateStringsArray,
    ...args: Array<CSSInterpolation>
): CSSFunction

function css(...args: Array<CSSInterpolation>): CSSFunction

function css(
    ...args: Array<TemplateStringsArray | CSSInterpolation>
): CSSFunction {
    const engine = useContext(AniqueStyledEngineContext)
    const serStyles = serializeStyles(args, undefined, {
        get theme() {
            return useTheme()
        }
    })
    const hashName = hashFunc(serStyles.styles)
    const className = engine.classNamePattern(hashName)
    const styles = `.${className}{${serStyles.styles}}`
    const Invoker = () => {
        injectStyles(styles, hashName, engine.nonce)
        return className
    }
    Invoker.toString = () => `.${className}`
    Invoker.__evaluate = `.${className}`
    Invoker.className = className
    return Invoker
}

export {css}