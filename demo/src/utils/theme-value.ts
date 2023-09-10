// Function to save a theme value to localStorage
import {ColorScheme} from "@qinetik/anique/theme/ColorScheme";

export function saveThemeValue(value: ColorScheme) {
    try {
        localStorage.setItem("theme", value.toString());
    } catch (error) {
        // Handle errors, e.g., if localStorage is full
        console.error("Error saving theme value:", error);
    }
}

export function removeThemeValue() {
    try {
        localStorage.removeItem("theme")
    } catch (e) {
        console.error("error removing theme value", e)
    }
}

// Function to retrieve a theme value from localStorage
export function getThemeValue(): ColorScheme | null {
    try {
        const storedValue = localStorage.getItem("theme");
        if (storedValue !== null) {
            return parseInt(storedValue) as ColorScheme

        }
    } catch (error) {
        // Handle errors, e.g., if localStorage is not available
        console.error("Error retrieving theme value:", error);
    }
    return null
}