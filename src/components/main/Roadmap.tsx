import {Table} from "@qinetik/anique";
import {css} from "@qinetik/emotion";

const progress = css`
    background: rgba(36, 150, 231, 0.3) !important;
`

const todo = css`
    background: rgba(241, 238, 109, 0.3) !important;
`

export function Roadmap() {
    return (
        <>
            <small>Last updated : 28/10/2023</small>
            <Table>
                <thead>
                <tr>
                    <td>Item</td>
                    <td>State</td>
                </tr>
                </thead>
                <tbody>
                <tr class={progress()}>
                    <td>Fixing Bugs</td>
                    <td>In Progress</td>
                </tr>
                <tr class={progress()}>
                    <td>Adding Important Components</td>
                    <td>In Progress</td>
                </tr>
                <tr class={progress()}>
                    <td>Writing Documentation</td>
                    <td>In Progress</td>
                </tr>
                <tr class={todo()}>
                    <td>Making CSS Variables Accessible</td>
                    <td>Backlog</td>
                </tr>
                <tr class={todo()}>
                    <td>RGB with dynamic alpha Colors</td>
                    <td>Backlog</td>
                </tr>
                <tr class={todo()}>
                    <td>Transitions</td>
                    <td>Backlog</td>
                </tr>
                <tr class={todo()}>
                    <td>Supporting Astro via Composable Components</td>
                    <td>Backlog</td>
                </tr>
                <tr class={todo()}>
                    <td>Supporting SSR in Astro</td>
                    <td>Backlog</td>
                </tr>
                <tr class={todo()}>
                    <td>Follow Material3 Guidelines (Kinda)</td>
                    <td>Backlog</td>
                </tr>
                <tr>
                    <td><s>Caching styles in SolidStart & Browser</s></td>
                    <td>Done</td>
                </tr>
                <tr>
                    <td><s>Minimal CSS in JS API</s></td>
                    <td>Done</td>
                </tr>
                <tr>
                    <td><s>Introduce Usable Components</s></td>
                    <td>Done</td>
                </tr>
                </tbody>
            </Table>
        </>
    )
}