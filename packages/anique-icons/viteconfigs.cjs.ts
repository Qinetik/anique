import {type BuildOptions, defineConfig, type LibraryOptions, type UserConfig} from "vite";
import solidPlugin from "vite-plugin-solid";
import path from "path";
import {CommonBuildOptions, CommonLibOptions} from "./viteconfig.base.ts";

export default defineConfig({
    build: {
        ...CommonBuildOptions,
        outDir : "dist/cjs",
        lib: {
            ...CommonLibOptions,
            formats: ["cjs"],
        }
    },
    plugins: [
        solidPlugin({
            ssr: true
        })
    ],
})