import {ColorScheme} from "@qinetik/anique/theme/ColorScheme";
import {Size} from "@qinetik/anique/theme/Size";
import LightDarkIcon from "../icons/LightDarkIcon";
import {IconButton} from "@qinetik/anique/icon-button";

export function ThemeSwitcher() {
    return (
        <IconButton
            onClick={() => {
                const prev = document.documentElement.className
                let next: ColorScheme
                if (prev == ColorScheme.Light) {
                    next = ColorScheme.Dark
                } else {
                    next = ColorScheme.Light
                }
                document.documentElement.className = next
            }}
            size={Size.Medium}
        >
            <LightDarkIcon/>
        </IconButton>
    )
}