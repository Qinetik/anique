import {RGBColor} from "../theme/Colors";
import {rgbColorWithOpacity} from "../utils/color-utils";

type RippleEvent = MouseEvent & { currentTarget: HTMLElement }

function putRippleStylesInDocument() {
    const rippleStyles = document.getElementById("anique-ripple-styles")
    if (rippleStyles == null) {
        const style = document.createElement("style")
        style.id = "anique-ripple-styles"
        style.innerHTML = "@keyframes ripple { to { transform: scale(2); opacity: 0; } }"
        document.head.appendChild(style)
    }
}

export function createRipple(event: RippleEvent, color ?: string, duration ?: number, percentSize ?: number, followMouse ?: boolean) {

    const container = event.currentTarget;

    putRippleStylesInDocument()

    const circle = document.createElement("span");
    const exactDuration = (duration || 600)

    // styling
    circle.className = "anq-ripple"
    circle.style.position = "absolute"
    circle.style.borderRadius = "50%"
    circle.style.transform = "scale(0)"
    circle.style.animation = "ripple " + exactDuration + "ms linear"
    circle.style.backgroundColor = color || "rgba(255,255,255,0.7)"

    const sizeMultiplier = percentSize || 1
    // creating
    const diameter = Math.max(container.clientWidth * sizeMultiplier, container.clientHeight * sizeMultiplier);

    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    const containerRect = container.getBoundingClientRect();

    const followEventPosition = followMouse || false
    const eventX = followEventPosition ? event.clientX : (containerRect.left + radius)
    const eventY = followEventPosition ? event.clientY : (containerRect.top + radius)

    circle.style.left = `${eventX - radius}px`;
    circle.style.top = `${eventY - radius}px`;
    const ripple = container.getElementsByClassName("anq-ripple")[0];

    if (ripple) {
        ripple.remove();
    }

    container.appendChild(circle);
}

export function createThemedRipple(onBackground: RGBColor, event: RippleEvent, duration ?: number) {
    return createRipple(event, rgbColorWithOpacity(onBackground, 0.9), duration != null ? duration : 350, undefined, true)
}