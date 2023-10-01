import {defineConfig} from "vite";
import solidPlugin from "vite-plugin-solid";
import path, {resolve} from "path";
import multiEntry from "@rollup/plugin-multi-entry";
import fg from 'fast-glob'

// Defines an array of entry points to be used to search for files.
const entryPoints = [
    'src/**/*.ts',
    'src/**/*.tsx'
]

// Searches for files that match the patterns defined in the array of input points.
// Returns an array of absolute file paths.
const files = fg.sync(entryPoints, {absolute: true})

// Maps the file paths in the "files" array to an array of key-value pair.
const entities = files.map((file) => {
    // Extract the part of the file path after the "src" folder and before the file extension.
    const [key] = file.match(/(?<=src\/).*$/) || []

    // Remove the file extension from the key.
    const keyWithoutExt = key.replace(/\.[^.]*$/, '')

    return [keyWithoutExt, file]
})

// Convert the array of key-value pairs to an object using the Object.fromEntries() method.
// Returns an object where each key is the file name without the extension and the value is the absolute file path.
const entries = Object.fromEntries(entities)
export default defineConfig({
    plugins: [
        solidPlugin()
    ],
    build: {
        assetsDir: "",
        outDir: "dist",
        minify : false,
        lib : {
            name : "anique",
            entry : "src/index.ts",
            formats : ["es", "cjs"],
            fileName : (format, entryName) => `${entryName}.${format}.js`
        },
        rollupOptions: {
            input: entries,
            output : {
                // entryFileNames : ({ name }) => `${name}.js`,
                inlineDynamicImports : false,
            },
            external: [
                "solid-js",
                "solid-js/web",
                "@qinetik/anique-icons",
                "@qinetik/emotion"
            ],
        }
    },
    resolve: {
        alias: {
            "@qinetik/emotion": resolve(__dirname, "../styled/src"),
            "@qinetik/anique-icons": resolve(__dirname, "../anique-icons/src")
        }
    }
});