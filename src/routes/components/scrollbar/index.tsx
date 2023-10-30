import {Column, Headline} from "@qinetik/anique";
import {DocContainer} from "../../../components/common/layout/DocContainer";
import ScrollbarAreaExample from "./examples/ScrollbarAreaExample";
import {ComponentExample} from "../../../solid/components/ComponentExample";

export default function ScrollbarPage() {
    return (
        <DocContainer>
            <Column>
                <Headline>Scrollbar</Headline>
                <p>You can use ScrollbarArea to create a beautiful looking scrollbar</p>
                <ComponentExample component={ScrollbarAreaExample}/>
            </Column>
        </DocContainer>
    )
}