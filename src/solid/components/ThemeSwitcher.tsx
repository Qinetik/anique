import {ColorScheme, getSystemColorScheme} from "@qinetik/anique/theme/ColorScheme";
import {Size} from "@qinetik/anique/theme/Size";
import LightDarkIcon from "../icons/LightDarkIcon";
import {IconButton} from "@qinetik/anique/icon-button";

export function ThemeSwitcher() {
    return (
        <IconButton
            onClick={() => {
                const system = getSystemColorScheme()
                const prev = document.documentElement.className
                let next: ColorScheme
                if (prev == ColorScheme.Light) {
                    next = ColorScheme.Dark
                } else {
                    next = ColorScheme.Light
                }
                if(next == system){
                    localStorage.removeItem("theme-key")
                } else {
                    localStorage.setItem("theme-key", next)
                }
                document.documentElement.className = next
            }}
        >
            <LightDarkIcon/>
        </IconButton>
    )
}