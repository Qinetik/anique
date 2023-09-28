import {createMemo} from "solid-js";
import {createThemeCSSVarsMappedStylesheet} from "./AniqueThemeCSSVarsMap";
import {Anique, AniqueTheme} from "./Theme";
import {Border} from "./Border";
import {Font} from "./Font";
import {Color, ResultColors} from "./Colors";
import {DefaultThemeBreakpoints} from "./Breakpoint";
import {AniqueAnimation} from "./Animation";
import {mountedStyles} from "@qinetik/emotion";

const CommonResultColors: ResultColors<Color> = {
    success: "rgb(21,87,36)",
    onSuccess: 'rgb(255,255,255)',
    warning: "rgb(133,100,4)",
    onWarning: 'rgb(255,255,255)',
    error: "rgb(239,68,68)",
    onError: "rgb(189,189,189)",
    info: "rgb(68,148,239)",
    onInfo: "rgb(189,189,189)"
}

const CommonFont: Font = {
    primary: '"Untitled Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
    secondary: '"Untitled Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
}

const CommonBorder: Border = {
    smRadius: "0.25em",
    mdRadius: "0.5em",
    lgRadius: "1em"
}

const CommonAnimation: AniqueAnimation = {
    timing: {
        ease: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        slider: 'cubic-bezier(0.05, 0.95, 0.35, 1.05)',
        slideStop: 'cubic-bezier(0.05, 0.05, 0, 1)',
        timingThrottle: 'cubic-bezier(0.95, 0, 0.95, 0.25)'
    }
}

const darkTheme: AniqueTheme = {
    border: CommonBorder,
    font: CommonFont,
    breakpoints: new DefaultThemeBreakpoints(),
    animation: CommonAnimation,
    colors: {

        ...CommonResultColors,

        primary: "rgb(23,207,185)",
        primary100: "rgb(44,232,210)",
        primary200: "rgb(85,236,219)",
        primary300: "rgb(126,241,227)",
        primary400: "rgb(168,245,236)",
        primary500: "rgb(209,250,245)",

        accent: "rgb(59,130,246)",
        accent100: "rgb(89,150,247)",
        accent200: "rgb(119,168,249)",
        accent300: "rgb(148,187,250)",
        accent400: "rgb(177,206,251)",
        accent500: "rgb(206,224,253)",

        bg: "#121212",
        bg100: "#1e1e1e",
        bg200: "#2c2c2c",
        bg300: "#3a3a3a",
        bg400: "#464646",
        bg500: "#525252",

        onBg: "rgb(255,255,255)",
        onBg100: "rgb(237,237,237)",
        onBg200: "rgb(219,219,219)",
        onBg300: "rgb(201,201,201)",
        onBg400: "rgb(184,184,184)",
        onBg500: "rgb(166,166,166)",
        backdrop: 'rgba(15, 23, 42, 1)',
    }
}

const lightTheme: AniqueTheme = {
    font: CommonFont,
    border: CommonBorder,
    breakpoints: new DefaultThemeBreakpoints(),
    animation: CommonAnimation,
    colors: {
        ...CommonResultColors,

        primary: "rgb(23,207,185)",
        primary100: "rgb(18,161,144)",
        primary200: "rgb(15,138,123)",
        primary300: "rgb(13,115,103)",
        primary400: "rgb(10,92,82)",
        primary500: "rgb(8,69,62)",

        accent: "rgb(59,130,246)",
        accent100: "rgb(26,110,244)",
        accent200: "rgb(11,92,224)",
        accent300: "rgb(9,78,190)",
        accent400: "rgb(7,64,156)",
        accent500: "rgb(6,50,122)",

        bg: "rgb(246,246,247)",
        bg100: "rgb(225,225,229)",
        bg200: "rgb(204,204,209)",
        bg300: "rgb(182,182,190)",
        bg400: "rgb(160,160,171)",
        bg500: "rgb(139,139,152)",

        onBg: "rgb(0,0,0)",
        onBg100: "rgb(23,23,23)",
        onBg200: "rgb(46,46,46)",
        onBg300: "rgb(69,69,69)",
        onBg400: "rgb(92,92,92)",
        onBg500: "rgb(115,115,115)",
        backdrop: 'rgba(0, 0, 0, 0.5)'
    }
};

interface AniqueThemeMounterProps {
    containerCssSelector: string
}

export const AniqueGlobalStyling = mountedStyles`
    // still figuring out if this is useful
    * {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    :root * {
        font-family : ${Anique.font.secondary};
        color : ${Anique.colors.onBg};
    }
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }
`

export function AniqueThemeDark(props: AniqueThemeMounterProps) {
    const darkStyleSheet = createMemo(() => createThemeCSSVarsMappedStylesheet(darkTheme))
    return (
        <style>{`${props.containerCssSelector}{${darkStyleSheet()}}`}</style>
    )
}

export function AniqueThemeLight(props: AniqueThemeMounterProps) {
    const darkStyleSheet = createMemo(() => createThemeCSSVarsMappedStylesheet(lightTheme))
    return (
        <style>{`${props.containerCssSelector}{${darkStyleSheet()}}`}</style>
    )
}