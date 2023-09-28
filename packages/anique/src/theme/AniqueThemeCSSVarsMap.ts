import {AniqueTheme, AniqueThemeAccessor} from "./Theme";
import {ThemeBreakpoints} from "./Breakpoint";

const ThemeMap: AniqueThemeAccessor = {
    border: {
        smRadius: "a1",
        mdRadius: "a2",
        lgRadius: "a3"
    },
    font: {
        primary: "a4",
        secondary: "a5",
    },
    animation: {
        timing: {
            ease: "a6",
            slider: "a7",
            slideStop: "a8",
            timingThrottle: "a9"
        }
    },
    colors: {

        // result colors
        success: "b0",
        onSuccess: "b1",
        warning: "b2",
        onWarning: "b3",
        error: "b4",
        onError: "b5",
        info: "b6",
        onInfo: "b7",

        primary: "b7",
        primary100: "b8",
        primary200: "b9",
        primary300: "c0",
        primary400: "c1",
        primary500: "c2",

        accent: "c3",
        accent100: "c4",
        accent200: "c5",
        accent300: "c6",
        accent400: "c7",
        accent500: "c7",

        bg: "c8",
        bg100: "c9",
        bg200: "d0",
        bg300: "d1",
        bg400: "d2",
        bg500: "d3",

        onBg: "d4",
        onBg100: "d5",
        onBg200: "d6",
        onBg300: "d7",
        onBg400: "d8",
        onBg500: "d9",
        backdrop: "e0",
    }
}

function createKeysCSSVarMap<Obj extends Record<string, any>>(keys: Array<keyof Obj>, keyMap: Obj, valueMap: Obj) {
    let styleRules = ""
    for (let i = 0; i < keys.length; i++) {
        const themeKey = keys[i]
        if (i > 0) styleRules += "\n"
        const cssVarName = keyMap[themeKey]
        if (cssVarName == null) {
            throw new Error(`No CSS Variable key found for theme key ${themeKey.toString()}`)
        }
        const cssValue = valueMap[themeKey]
        if (cssValue == null) {
            throw new Error(`No CSS Variable value found for theme key ${themeKey.toString()} && mapped key ${cssVarName}`)
        }
        styleRules += `--${cssVarName}:${cssValue};`
    }
    return styleRules
}

/**
 * It creates a stylesheet containing css variables to their values
 * for example --onBg:#fff; only in this case onBg will be replaced with an arbitrary name,
 * arbitrary name like a1, so it will write --a1:#fff;
 * you'll still access it using javascript like onBg because it's mapped to a1
 * Since javascript is run during ssg, only the mapping will make it to the browser a1, which is pretty efficient and performant
 * @param theme
 */
export function createThemeCSSVarsMappedStylesheet(theme: AniqueThemeAccessor) {
    const borderMapping = createKeysCSSVarMap(Object.keys(ThemeMap.border) as Array<keyof typeof ThemeMap.border>, ThemeMap.border, theme.border)
    const fontMapping = createKeysCSSVarMap(Object.keys(ThemeMap.font) as Array<keyof typeof ThemeMap.font>, ThemeMap.font, theme.font)
    const animationTimingMapping = createKeysCSSVarMap(Object.keys(ThemeMap.animation.timing) as Array<keyof typeof ThemeMap.animation.timing>, ThemeMap.animation.timing, theme.animation.timing)
    const colorsMapping = createKeysCSSVarMap(Object.keys(ThemeMap.colors) as Array<keyof typeof ThemeMap.colors>, ThemeMap.colors, theme.colors)
    return [borderMapping, fontMapping, animationTimingMapping, colorsMapping].join("\n")
}

/**
 * It creates a AniqueTheme object, which contains mapping to css variables
 * for example accessing colors.onBg outputs var(--a1) where a1 is the arbitrary name of the css variable given to colors.onBg
 * @param breakpoints
 */
export function createAniqueTheme(breakpoints: ThemeBreakpoints): AniqueTheme {
    return {
        border: {
            smRadius: `var(--${ThemeMap.border.smRadius})`,
            mdRadius: `var(--${ThemeMap.border.mdRadius})`,
            lgRadius: `var(--${ThemeMap.border.lgRadius})`
        },
        font: {
            primary: `var(--${ThemeMap.font.primary})`,
            secondary: `var(--${ThemeMap.font.secondary})`,
        },
        animation: {
            timing: {
                ease: `var(--${ThemeMap.animation.timing.ease})`,
                slider: `var(--${ThemeMap.animation.timing.slider})`,
                timingThrottle: `var(--${ThemeMap.animation.timing.timingThrottle})`,
                slideStop: `var(--${ThemeMap.animation.timing.slideStop})`
            }
        },
        colors: {
            accent: `var(--${ThemeMap.colors.accent})`,
            accent100: `var(--${ThemeMap.colors.accent100})`,
            accent200: `var(--${ThemeMap.colors.accent200})`,
            accent300: `var(--${ThemeMap.colors.accent300})`,
            accent400: `var(--${ThemeMap.colors.accent400})`,
            accent500: `var(--${ThemeMap.colors.accent500})`,
            backdrop: `var(--${ThemeMap.colors.backdrop})`,
            bg: `var(--${ThemeMap.colors.bg})`,
            bg100: `var(--${ThemeMap.colors.bg100})`,
            bg200: `var(--${ThemeMap.colors.bg200})`,
            bg300: `var(--${ThemeMap.colors.bg300})`,
            bg400: `var(--${ThemeMap.colors.bg400})`,
            bg500: `var(--${ThemeMap.colors.bg500})`,
            error: `var(--${ThemeMap.colors.error})`,
            info: `var(--${ThemeMap.colors.info})`,
            onBg: `var(--${ThemeMap.colors.onBg})`,
            onBg100: `var(--${ThemeMap.colors.onBg100})`,
            onBg200: `var(--${ThemeMap.colors.onBg200})`,
            onBg300: `var(--${ThemeMap.colors.onBg300})`,
            onBg400: `var(--${ThemeMap.colors.onBg400})`,
            onBg500: `var(--${ThemeMap.colors.onBg500})`,
            onError: `var(--${ThemeMap.colors.onError})`,
            onInfo: `var(--${ThemeMap.colors.onInfo})`,
            onSuccess: `var(--${ThemeMap.colors.onSuccess})`,
            onWarning: `var(--${ThemeMap.colors.onWarning})`,
            primary: `var(--${ThemeMap.colors.primary})`,
            primary100: `var(--${ThemeMap.colors.primary100})`,
            primary200: `var(--${ThemeMap.colors.primary200})`,
            primary300: `var(--${ThemeMap.colors.primary300})`,
            primary400: `var(--${ThemeMap.colors.primary400})`,
            primary500: `var(--${ThemeMap.colors.primary500})`,
            success: `var(--${ThemeMap.colors.success})`,
            warning: `var(--${ThemeMap.colors.warning})`
        },
        breakpoints: breakpoints
    }
}

export default ThemeMap