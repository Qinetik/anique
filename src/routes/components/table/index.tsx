import {Column, Headline} from "@qinetik/anique";
import {DocContainer} from "../../../components/common/layout/DocContainer";
import {ComponentExample} from "../../../solid/components/ComponentExample";
import BasicTableExample from "./examples/BasicTableExample";

export default function TablePage() {
    return (
        <DocContainer>
            <Column>
                <Headline>Table</Headline>
                <ComponentExample component={BasicTableExample}/>
            </Column>
        </DocContainer>
    )
}