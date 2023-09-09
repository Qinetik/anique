import {ThemeColors} from "./Colors";
import {Font} from "./Font";
import {ThemeBreakpoints} from "./Breakpoint";
import {Border} from "./Border";
import {AniqueAnimation} from "./Animation";

export interface AniqueTheme {
    colors: ThemeColors
    font: Font
    breakpoints: ThemeBreakpoints
    border: Border
    animation : AniqueAnimation
}