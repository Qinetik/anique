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
            formats: ["es", "cjs"],
            fileName: (format) => ("index." + format + ".js"),
        },
        rollupOptions: {
            external: [
                "solid-js",
                "solid-js/web"
            ],
        },
    }
});