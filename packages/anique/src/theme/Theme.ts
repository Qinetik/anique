import {Color, RGBColor, ThemeColors} from "./Colors";
import {Font} from "./Font";
import {DefaultThemeBreakpoints, ThemeBreakpoints} from "./Breakpoint";
import {Border} from "./Border";
import {AniqueAnimation} from "./Animation";
import {createAniqueTheme} from "./AniqueThemeCSSVarsMap";

export interface AniqueThemeAccessor {
    colors: ThemeColors<string, string>
    font: Font
    border: Border
    animation: AniqueAnimation
}

/**
 * This is the
 */
export interface AniqueTheme extends AniqueThemeAccessor {
    breakpoints: ThemeBreakpoints
}

export const Anique = createAniqueTheme(new DefaultThemeBreakpoints())