import {Column} from "@qinetik/anique/column";
import {Headline} from "@qinetik/anique/headline";
import {ComponentExample} from "../../../solid/components/ComponentExample";
import BasicNSelectExample from "./examples/BasicNSelectExample";
import DisabledNSelectExample from "./examples/DisabledNSelectExample";
import MultipleNSelectExample from "./examples/MultipleNSelectExample";
import {DocContainer} from "../../../components/common/layout/DocContainer";

export default function NativeSelectPage() {
    return (
        <DocContainer>
            <Column>
                <Headline>Native Select</Headline>
                <ComponentExample component={BasicNSelectExample}/>
                <h1>Disabled</h1>
                <ComponentExample component={DisabledNSelectExample}/>
                <h1>Multiple</h1>
                <ComponentExample component={MultipleNSelectExample}/>
            </Column>
        </DocContainer>
    )
}