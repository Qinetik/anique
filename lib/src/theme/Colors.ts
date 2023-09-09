export type RGBColor = `rgb(${number},${number},${number})`;

export type RGBAColor = `rgba(${number},${number},${number},${number})`

export type Colors = RGBColor | RGBAColor

interface BrandColors {
    /**
     * The primary brand color,
     * Variations can be brighter or darker,
     * Default Themes Variations : darker in light color scheme & brighter in dark color scheme
     */
    primary: Colors
    /**
     * The primary brand color shade 100
     */
    primary100: Colors
    /**
     * The primary brand color shade 200
     */
    primary200: Colors
    /**
     * The primary brand color shade 300
     */
    primary300: Colors
    /**
     * The primary brand color shade 400
     */
    primary400: Colors
    /**
     * The primary brand color shade 500
     */
    primary500: Colors
    /**
     * The secondary brand color,
     * Variations can be brighter or darker,
     * Default Themes Variations : darker in light color scheme & brighter in dark color scheme
     */
    accent: Colors
    /**
     * The secondary brand color shade 100
     */
    accent100: Colors
    /**
     * The secondary brand color shade 200
     */
    accent200: Colors
    /**
     * The secondary brand color shade 300
     */
    accent300: Colors
    /**
     * The secondary brand color shade 400
     */
    accent400: Colors
    /**
     * The secondary brand color shade 400
     */
    accent500: Colors
}

export interface ResultColors {
    /**
     * (text / background) color for success
     * must be always used over bg and onBg and their variations
     */
    success: Colors
    /**
     * The text color to be used over color success
     */
    onSuccess: Colors
    /**
     * (text / background) color for success
     * must be always used over bg and onBg and their variations
     */
    error: Colors
    /**
     * The text color to be used over color error
     */
    onError: Colors
    /**
     * (text / background) color for success
     * must be always used over bg and onBg and their variations
     */
    warning: Colors
    /**
     * The text color to be used over color warning
     */
    onWarning: Colors
    /**
     * (text / background) color for success
     * must be always used over bg and onBg and their variations
     */
    info: Colors
    /**
     * The text color to be used over color info
     */
    onInfo: Colors
}

export interface ThemeColors extends BrandColors, ResultColors {
    /**
     * bg is the main background color
     * Variations are brighter in dark mode and darker in light mode
     * e.g. dark mode : #000 , light mode : #fff
     */
    bg: RGBColor
    /**
     * brighter or darker shade of bg
     */
    bg100: Colors
    /**
     * brighter or darker shade of bg
     */
    bg200: Colors
    /**
     * brighter or darker shade of bg
     */
    bg300: Colors
    /**
     * brighter or darker shade of bg
     */
    bg400: Colors
    /**
     * brighter or darker shade of bg
     */
    bg500: Colors
    /**
     * onBg is content color to be used on the bg color
     * Variations are darker in dark mode and brighter in light mode
     * e.g. dark mode : #fff , light mode : #000
     */
    onBg: RGBColor
    /**
     * brighter or darker shade of onBg
     */
    onBg100: Colors
    /**
     * brighter or darker shade of onBg
     */
    onBg200: Colors
    /**
     * brighter or darker shade of onBg
     */
    onBg300: Colors
    /**
     * brighter or darker shade of onBg
     */
    onBg400: Colors
    /**
     * brighter or darker shade of onBg
     */
    onBg500: Colors
    /**
     * color being used for the backdrop or scrim
     */
    backdrop: Colors
}
