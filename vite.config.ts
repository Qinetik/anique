import solid from 'solid-start/vite'
import staticAdapter from "solid-start-static"
import {defineConfig} from 'vite'
import {resolve} from "path";

export default defineConfig(() => {
    return {
        base: "/anique",
        plugins: [
            {
                name: "examples",
                enforce: "pre",
                transform(code, id) {
                    if (id.includes("Example") && id.endsWith(".tsx")) {
                        const exportDefaultRegex = /export\s+default\s+function\s+(\w+)/;
                        const matches = exportDefaultRegex.exec(code);

                        if (exportDefaultRegex && matches) {
                            console.log("matches", matches)
                            const [, functionName] = matches;
                            const originalCode = code
                                .split(/\r?\n/)
                                .filter((line) => !line.trim().startsWith("// eslint-disable"))
                                .join("\n");

                            code = code.replace(/export\s+default\s+function/, "function");
                            code += `\n${functionName}.code = ${JSON.stringify(
                                originalCode
                            )};\n`;
                            code += `\nexport default ${functionName}`;
                            return code;
                        }
                    }
                },
            },
            solid({
                adapter: staticAdapter(),
                ssr: true
            })
        ],
        resolve: {
            alias: {
                "@qinetik/emotion": resolve(__dirname, "./packages/styled/src"),
                "@qinetik/anique": resolve(__dirname, "./packages/anique/src")
            }
        }
    }
})
