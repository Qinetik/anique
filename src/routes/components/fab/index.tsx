import {Column} from "@qinetik/anique/column";
import {ComponentExample} from "../../../solid/components/ComponentExample";
import FabExample from "./examples/FabExample";
import {DocContainer} from "../../../components/common/layout/DocContainer";
import ExtendedFabExample from "./examples/ExtendedFabExample";

export default function FabPage() {
    return (
        <DocContainer>
            <Column>
                <h1>Fab</h1>
                <ComponentExample component={FabExample}/>
                <h1>Extended Fab</h1>
                <ComponentExample component={ExtendedFabExample}/>
            </Column>
        </DocContainer>
    )
}