export type RGBColor = `rgb(${number},${number},${number})`;

export type RGBAColor = `rgba(${number},${number},${number},${number})`

export type Color = RGBColor | RGBAColor

export interface BrandColors<Color extends string = string> {
    /**
     * The primary brand color,
     * Variations can be brighter in dark mode & darker in light mode,
     */
    primary: Color
    /**
     * The primary brand color shade 100
     */
    primary100: Color
    /**
     * The primary brand color shade 200
     */
    primary200: Color
    /**
     * The primary brand color shade 300
     */
    primary300: Color
    /**
     * The primary brand color shade 400
     */
    primary400: Color
    /**
     * The primary brand color shade 500
     */
    primary500: Color
    /**
     * The secondary brand color,
     * Variations can be brighter or darker,
     * Default Themes Variations : darker in light color scheme & brighter in dark color scheme
     */
    accent: Color
    /**
     * The secondary brand color shade 100
     */
    accent100: Color
    /**
     * The secondary brand color shade 200
     */
    accent200: Color
    /**
     * The secondary brand color shade 300
     */
    accent300: Color
    /**
     * The secondary brand color shade 400
     */
    accent400: Color
    /**
     * The secondary brand color shade 400
     */
    accent500: Color
}

export interface ResultColors<Color extends string = string> {
    /**
     * (text / background) color for success
     * must be always used over bg and onBg and their variations
     */
    success: Color
    /**
     * The text color to be used over color success
     */
    onSuccess: Color
    /**
     * (text / background) color for success
     * must be always used over bg and onBg and their variations
     */
    error: Color
    /**
     * The text color to be used over color error
     */
    onError: Color
    /**
     * (text / background) color for success
     * must be always used over bg and onBg and their variations
     */
    warning: Color
    /**
     * The text color to be used over color warning
     */
    onWarning: Color
    /**
     * (text / background) color for success
     * must be always used over bg and onBg and their variations
     */
    info: Color
    /**
     * The text color to be used over color info
     */
    onInfo: Color
}

export interface BgColors<RGBColor extends string, Color extends string> {
    /**
     * bg is the main background color
     * Variations are brighter in dark mode and darker in light mode
     * e.g. dark mode : #000 , light mode : #fff
     */
    bg: RGBColor
    /**
     * brighter or darker shade of bg
     */
    bg100: Color
    /**
     * brighter or darker shade of bg
     */
    bg200: Color
    /**
     * brighter or darker shade of bg
     */
    bg300: Color
    /**
     * brighter or darker shade of bg
     */
    bg400: Color
    /**
     * brighter or darker shade of bg
     */
    bg500: Color
}

export interface OnBgColors<RGBColor extends string = string, Color extends string = string> {
    /**
     * onBg is content color to be used on the bg color
     * Variations are darker in dark mode and brighter in light mode
     * e.g. dark mode : #fff , light mode : #000
     */
    onBg: RGBColor
    /**
     * brighter or darker shade of onBg
     */
    onBg100: Color
    /**
     * brighter or darker shade of onBg
     */
    onBg200: Color
    /**
     * brighter or darker shade of onBg
     */
    onBg300: Color
    /**
     * brighter or darker shade of onBg
     */
    onBg400: Color
    /**
     * brighter or darker shade of onBg
     */
    onBg500: Color
}

export interface ThemeColors<RGBColor extends string, Color extends string> extends BgColors<RGBColor, Color>, OnBgColors<RGBColor, Color>, BrandColors<Color>, ResultColors<Color> {
    /**
     * color being used for the backdrop or scrim
     */
    backdrop: Color
}
