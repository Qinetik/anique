import {Card} from "@qinetik/anique/card";
import {Column} from "@qinetik/anique/column";
import {Headline} from "@qinetik/anique/headline";
import {Size} from "@qinetik/anique/theme/Size";

export default function NativeTextPage() {
    return (
        <Column>
            <Headline size={Size.Small}>Native Text Components</Headline>
            <h1>Headings</h1>
            <Card>
                <h1>The quick brown fox jumps over the lazy dog</h1>
                <h2>The quick brown fox jumps over the lazy dog</h2>
                <h3>The quick brown fox jumps over the lazy dog</h3>
                <h4>The quick brown fox jumps over the lazy dog</h4>
                <h5>The quick brown fox jumps over the lazy dog</h5>
                <h6>The quick brown fox jumps over the lazy dog</h6>
            </Card>
            <h1>Paragraph</h1>
            <Card>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Card>
        </Column>

    )
}