import {Card} from "@qinetik/anique/card";
import {Column} from "@qinetik/anique/column";
import {Headline} from "@qinetik/anique/headline";
import {Size} from "@qinetik/anique/theme/Size";
import {DocContainer} from "../../../components/common/layout/DocContainer";
import {ComponentExample} from "../../../solid/components/ComponentExample";
import HeadlineExample from "./examples/HeadlineExample";

export default function HeadlinePage() {
    return (
        <DocContainer>
            <Column>
                <h1>Headlines</h1>
                <ComponentExample component={HeadlineExample} codeVisible={true} />
            </Column>
        </DocContainer>
    )
}