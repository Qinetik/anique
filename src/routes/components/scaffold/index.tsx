import {Column, Headline} from "@qinetik/anique";

import {DocContainer} from "../../../components/common/layout/DocContainer";

export default function ScaffoldPage() {
    const base = "/anique"
    return (
        <DocContainer>
            <Column>
                <Headline>Scaffold</Headline>
                <p>Checkout <a href={`${base}/testing/scaffold`} target={"_blank"}>Scaffold Page</a></p>
            </Column>
        </DocContainer>
    )
}