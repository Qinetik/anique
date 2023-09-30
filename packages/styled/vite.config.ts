import {defineConfig} from "vite";
import solidPlugin from "vite-plugin-solid";
import path from "path";

export default defineConfig({
    plugins: [
        solidPlugin()
    ],
    build: {
        lib: {
            entry: path.resolve(__dirname, "src/index.ts"),
            formats: ["es"],
            fileName: format => (format === "es" ? "index.js" : ""),
        },
        rollupOptions: {
            external: [
                "solid-js",
                "solid-js/web"
            ],
        },
    },
});