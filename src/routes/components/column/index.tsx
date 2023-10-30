import {Column} from "@qinetik/anique/column";
import {Headline} from "@qinetik/anique/headline";
import {ComponentExample} from "../../../solid/components/ComponentExample";
import ColSameSizedExample from "./examples/ColSameSizedExample";
import ColDiffSizedExample from "./examples/ColDiffSizedExample";
import ColWrapExample from "./examples/ColWrapExample";
import {DocContainer} from "../../../components/common/layout/DocContainer";

export default function ColumnPage() {
    return (
        <DocContainer>
            <Column>
                <Headline>Column</Headline>
                <h1>Same sized items</h1>
                <ComponentExample component={ColSameSizedExample}/>
                <h1>Different sized items</h1>
                <ComponentExample component={ColDiffSizedExample}/>
                <h1>Wrap</h1>
                <ComponentExample component={ColWrapExample}/>
            </Column>
        </DocContainer>
    )
}