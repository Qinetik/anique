import {type BuildOptions, defineConfig, type LibraryOptions, type UserConfig} from "vite";
import path from "path";

export const CommonLibOptions: LibraryOptions = {
    entry: path.resolve(__dirname, "src/index.ts"),
    fileName: format => `index.${format}.js`
}
export const CommonBuildOptions: BuildOptions = {
    rollupOptions: {
        external: [
            "solid-js",
            "solid-js/web"
        ],
    },
}