import {RGBAColor, RGBColor} from "../theme/Colors";

export function rgbColorWithOpacity(color: RGBColor, opacity: number): RGBAColor {
    return (color.substring(0, color.length - 1) + "," + Math.min(1, Math.max(0, opacity)) + ")") as RGBAColor
}

/**
 * @deprecated untested, please test first
 * @param color
 * @param opacity
 */
export function rgbaColorWithOpacity(color: RGBAColor, opacity: number): RGBAColor {
    return (color.substring(color.lastIndexOf(","), opacity) + "," + Math.min(1, Math.max(0, opacity)) + ")") as RGBAColor
}