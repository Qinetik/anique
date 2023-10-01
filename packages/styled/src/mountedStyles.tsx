// Reference https://github.dev/emotion-js/emotion/blob/26ded6109fcd8ca9875cc2ce4564fee678a3f3c5/packages/react/src/keyframes.js#L24
import {CSSInterpolation, serializeStyles} from '@emotion/serialize'
import {JSX} from "solid-js";
import hashFunc from "@emotion/hash"
import {Dynamic} from "solid-js/web";

type MountedStylesComponent = (() => JSX.Element)

function mountedStyles(
    template: TemplateStringsArray,
    ...args: Array<CSSInterpolation>
): MountedStylesComponent

function mountedStyles(...args: Array<CSSInterpolation>): MountedStylesComponent

function mountedStyles(...args: any[]): MountedStylesComponent {
    const styles = serializeStyles(args)
    const hash = hashFunc(styles.styles)
    // const name = getNameSerializedStyles(hash, false)
    return () => {
        return (
            <Dynamic
                component={"style"}
                children={styles.styles}
            />
        )
    }
}

export {mountedStyles}