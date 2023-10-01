import {Alert, AlertType, Anique, Card, Column, Headline} from "@qinetik/anique";

export default function SetupPage() {
    return (
        <Column>
            <Headline>Setup</Headline>
            <p>You can install the dependencies manually, but it will be time consuming.</p>
            <h1>Solid Start + Anique Template</h1>
            <Card>
                <span>Clone this repo</span><br/>
                <a>https://github.com/Qinetik/anique-solid-start-template</a>
            </Card>
            <h1>Astro + SolidJS + Anique Template</h1>
            <p>You must use our starter template, It includes working dependencies and everything</p>
            <Card>
                <span>Clone this repo</span><br/>
                <a>https://github.com/Qinetik/anique-astro-template</a>
            </Card>
            <h1>Manual Setup</h1>
            <Alert type={AlertType.Success}>Use Vite for development</Alert>
            <span style={{color: Anique.colors.onBg400}}>Scroll down for library setup</span>
            <h3>NPM</h3>
            <Card>
                <Column gap={"0.5em"}>
                    <Card style={{"background-color": Anique.colors.bg300}}>
                        npm install <a href={"https://www.npmjs.com/package/@qinetik/anique"}>@qinetik/anique</a>
                    </Card>
                    <Card style={{"background-color": Anique.colors.bg300}}>
                        npm install <a href={"https://www.npmjs.com/package/@qinetik/emotion"}>@qinetik/emotion</a>
                    </Card>
                </Column>
            </Card>
            <h3>Yarn</h3>
            <Card>
                <Column gap={"0.5em"}>
                    <Card style={{"background-color": Anique.colors.bg300}}>
                        yarn add <a href={"https://www.npmjs.com/package/@qinetik/anique"}>@qinetik/anique</a>
                    </Card>
                    <Card style={{"background-color": Anique.colors.bg300}}>
                        yarn add <a href={"https://www.npmjs.com/package/@qinetik/emotion"}>@qinetik/emotion</a>
                    </Card>
                </Column>
            </Card>
            <h3>Pnpm</h3>
            <Card>
                <Column gap={"0.5em"}>
                    <Card style={{"background-color": Anique.colors.bg300}}>
                        pnpm add <a href={"https://www.npmjs.com/package/@qinetik/anique"}>@qinetik/anique</a>
                    </Card>
                    <Card style={{"background-color": Anique.colors.bg300}}>
                        pnpm add <a href={"https://www.npmjs.com/package/@qinetik/emotion"}>@qinetik/emotion</a>
                    </Card>
                </Column>
            </Card>
            <h3>Github Packages</h3>
            <p>
                These packages are also available on Github Packages
            </p>
            <Column gap={"0.5em"}>
                <Alert type={AlertType.Info}>
                    We use github packages internally to publish packages for testing
                </Alert>
                <Card>
                    <Column gap={"0.5em"}>
                        <Card style={{"background-color": Anique.colors.bg300}}>
                            <a href={"https://github.com/Qinetik/anique/pkgs/npm/anique"}>@qinetik/anique</a>
                        </Card>
                        <Card style={{"background-color": Anique.colors.bg300}}>
                            <a href={"https://github.com/Qinetik/anique/pkgs/npm/emotion"}>@qinetik/emotion</a>
                        </Card>
                        <Card style={{"background-color": Anique.colors.bg300}}>
                            <a href={"https://github.com/Qinetik/anique/pkgs/npm/anique-icons"}>@qinetik/anique-icons</a>
                        </Card>
                    </Column>
                </Card>
            </Column>
            <h1>Library Setup</h1>
            <Column gap={"0.5em"}>
                <Alert type={AlertType.Success}>Use Vite for development</Alert>
                <Alert type={AlertType.Success}>Use tsup with <a
                    href={"https://github.com/solidjs-community/tsup-preset-solid"}>tsup-preset-solid</a> for bundling
                    the library</Alert>
                <Alert type={AlertType.Info}>Make sure @qinetik/anique @qinetik/emotion are peerDependencies</Alert>
                <Alert type={AlertType.Info}>At the moment, You may need to specify types explicitly for the components
                    you create using @qinetik/emotion</Alert>
            </Column>
        </Column>
    )
}