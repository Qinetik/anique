import {JSX} from "solid-js";

export enum Position {
    TopLeft,
    TopCenter,
    TopRight,

    CenterLeft,
    Center,
    CenterRight,

    BottomLeft,
    BottomCenter,
    BottomRight
}

/**
 * Returns styles for positioning the content inside a position : relative div
 * @param position The position
 * @param horizontalOffset The horizontal offset, From the boundary of screen (or parent div)
 * @param verticalOffset The vertical offset, From the sides of screen (or parent div)
 */
export function relativePositionStyle(position : Position, horizontalOffset ?: string, verticalOffset ?: string) : JSX.CSSProperties {
    const x = horizontalOffset || "0"
    const y = verticalOffset || "0"
    switch(position){
        case Position.TopLeft:
            return {
                left : x,
                top : y
            }
        case Position.TopCenter:
            return {
                top : y,
                left : x == "0" ? "50%" : `calc(50% + ${x})`,
                transform : "translateX(-50%)"
            }
        case Position.TopRight:
            return {
                top : y,
                right : x
            }
        case Position.CenterLeft:
            return {
                top : y == "0" ? "50%" : `calc(50% + ${y})`,
                left : x,
                transform : "translateY(-50%)"
            }
        case Position.Center:
            return {
                top : y == "0" ? "50%" : `calc(50% + ${y})`,
                left: x == "0" ? "50%" : `calc(50% + ${x})`,
                transform : "translate(-50%, -50%)"
            }
        case Position.CenterRight:
            return {
                top : y == "0" ? "50%" : `calc(50% + ${y})`,
                right : x,
                transform : "translateY(-50%)"
            }
        case Position.BottomLeft:
            return {
                bottom : y,
                left : x
            }
        case Position.BottomCenter:
            return {
                left: x == "0" ? "50%" : `calc(50% + ${x})`,
                bottom : y,
                transform : "translateX(-50%)"
            }
        case Position.BottomRight:
            return {
                right : x,
                bottom : y
            }
    }
}