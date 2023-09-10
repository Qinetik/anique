import solid from "solid-start/vite";
import staticAdapter from "solid-start-static";
import {defineConfig} from "vite";
import {resolve} from "path";

export default defineConfig({
    base: "/",
    // insert your github project name between slashes above
    plugins: [solid({adapter: staticAdapter(), ssr: false })],
    resolve: {
        conditions: ["development", "browser"],
        alias: {
            "@qinetik/anique": resolve(__dirname, "../lib/src"),
            "@qinetik/emotion": resolve(__dirname, "../styled/src")
        }
    },
});