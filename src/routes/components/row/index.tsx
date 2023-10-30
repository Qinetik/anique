import {Column} from "@qinetik/anique/column";
import {Headline} from "@qinetik/anique/headline";
import {ComponentExample} from "../../../solid/components/ComponentExample";
import RowSameSizedExample from "./examples/RowSameSizedExample";
import RowDiffSizedExample from "./examples/RowDiffSizedExample";
import RowWrapSizedExample from "./examples/RowWrapSizedExample";
import {DocContainer} from "../../../components/common/layout/DocContainer";

export default function RowPage() {
    return (
        <DocContainer>
            <Column>
                <Headline>Row</Headline>
                <h1>Equal Sized Items</h1>
                <ComponentExample component={RowSameSizedExample}/>
                <h1>Different Sized Items</h1>
                <ComponentExample component={RowDiffSizedExample}/>
                <h1>Wrap</h1>
                <ComponentExample component={RowWrapSizedExample}/>
            </Column>
        </DocContainer>
    )
}