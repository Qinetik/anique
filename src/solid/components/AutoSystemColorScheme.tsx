import {createEffect} from "solid-js";
import {getSystemColorScheme, onSystemColorSchemeChange} from "@qinetik/anique/theme/ColorScheme";

export function AutoSystemColorScheme() {
    createEffect(() => {
        document.documentElement.className = getSystemColorScheme()
        onSystemColorSchemeChange((scheme) => {
            document.documentElement.className = scheme
        })
    })
}