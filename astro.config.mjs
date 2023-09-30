import {defineConfig} from 'astro/config';

import solidJs from "@astrojs/solid-js";
import {resolve} from "path";

import {fileURLToPath} from 'url';
import {dirname} from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function integratePaths() {
    return {
        name: 'anique-solid-vite-config',
        hooks: {
            'astro:config:setup': ({updateConfig}) => {
                updateConfig({
                    vite: {
                        resolve: {
                            alias: {
                                "@qinetik/emotion": resolve(__dirname, "./packages/styled/src"),
                                "@qinetik/anique": resolve(__dirname, "./packages/anique/src")
                            }
                        }
                    },
                });
            },
        },
    };
}

// https://astro.build/config
export default defineConfig({
    integrations: [solidJs(), integratePaths()],
    base: '/anique',
});