import {Column} from "@qinetik/anique/column";
import {ComponentExample} from "../../../solid/components/ComponentExample";
import {BasicIconButtonExample} from "./examples/BasicIconButtonExample";
import {DocContainer} from "../../../components/common/layout/DocContainer";

export default function IconButtonPage() {
    return (
        <DocContainer>
            <Column>
                <h1>IconButton</h1>
                <ComponentExample component={BasicIconButtonExample}/>
            </Column>
        </DocContainer>
    )
}