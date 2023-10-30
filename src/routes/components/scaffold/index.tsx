import {Column, Headline} from "@qinetik/anique";

import {DocContainer} from "../../../components/common/layout/DocContainer";
import {ComponentExample} from "../../../solid/components/ComponentExample";
import ScaffoldExample from "./examples/ScaffoldExample";

export default function ScaffoldPage() {
    const base = "/anique"
    return (
        <DocContainer>
            <Column>
                <Headline>Scaffold</Headline>
                <p>Checkout <a href={`${base}/components/scaffold/examples/ScaffoldExample`} target={"_blank"}>Open in
                    New Page</a></p>
                <ComponentExample component={ScaffoldExample} codeOnly={true} codeVisible={true} />
            </Column>
        </DocContainer>
    )
}