import type {ParentProps} from "solid-js";
import {ThemeProvider} from "@qinetik/emotion";
import {darkTheme} from "@qinetik/anique/theme/Default";
import {AniqueThemeDark, AniqueThemeLight} from "@qinetik/anique/theme/AniqueThemes";

export function ThemeContainer(props: ParentProps) {
    return (
        <>
            <AniqueThemeDark containerCssSelector={".dark"}/>
            <AniqueThemeLight containerCssSelector={".light"}/>
            <ThemeProvider theme={() => darkTheme} children={props.children}/>
        </>
    )
}