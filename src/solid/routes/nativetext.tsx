import {Card} from "@qinetik/anique/card";
import {Column} from "@qinetik/anique/column";
import {Headline} from "@qinetik/anique/headline";
import {Size} from "@qinetik/anique/theme/Size";

export default function NativeTextPage() {
    return (
        <Column>
            <Headline size={Size.Small}>Native Text Components</Headline>
            <p>
                You don't need to import native components, We are talking about <code>h1..h6, span, p, a</code>.<br />
                However you do need to import the global styles for these components on the page once.
            </p>
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
            <h1>Links</h1>
            <Card>
                <a href={"https://example.com"} target={"_blank"}>Here's my link</a>
            </Card>
        </Column>

    )
}