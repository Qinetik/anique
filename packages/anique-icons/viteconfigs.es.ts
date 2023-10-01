import {defineConfig} from "vite";
import {CommonBuildOptions, CommonLibOptions} from "./viteconfig.base.ts";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
    build: {
        ...CommonBuildOptions,
        outDir : "dist/es",
        lib: {
            ...CommonLibOptions,
            formats: ["es"],
        }
    },
    plugins: [
        solidPlugin()
    ],
})