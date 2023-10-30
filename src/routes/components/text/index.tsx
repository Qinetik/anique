import {Column} from "@qinetik/anique/column";
import {Headline} from "@qinetik/anique/headline";
import {Size} from "@qinetik/anique/theme/Size";
import {DocContainer} from "../../../components/common/layout/DocContainer";
import {ComponentExample} from "../../../solid/components/ComponentExample";
import HeadingsExample from "./examples/HeadingExample";
import ParagraphExample from "./examples/ParagraphExample";
import LinksExample from "./examples/LinksExample";

export default function NativeTextPage() {
    return (
        <DocContainer>
            <Column>
                <Headline size={Size.Small}>Native Text Components</Headline>
                <p>
                    You don't need to import native components, We are talking about <code>h1..h6, span, p,
                    a</code>.<br/>
                    However you do need to import the global styles for these components on the page once.
                </p>
                <h1>Headings</h1>
                <ComponentExample component={HeadingsExample}/>
                <h1>Paragraph</h1>
                <ComponentExample component={ParagraphExample}/>
                <h1>Links</h1>
                <ComponentExample component={LinksExample}/>
            </Column>
        </DocContainer>
    )
}