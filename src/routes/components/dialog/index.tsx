import {Column} from "@qinetik/anique";
import {DocContainer} from "../../../components/common/layout/DocContainer";
import {ComponentExample} from "../../../solid/components/ComponentExample";
import PositionedDialogExample from "./examples/PositionedDialogExample";
import CenteredDialogExample from "./examples/CenteredDialogExample";
import AlertDialogExamples from "./examples/AlertDialogExamples";


export default function DialogPage() {
    return (
        <DocContainer>
            <Column>
                <h1>Dialog</h1>
                <h1>Centered Dialog</h1>
                <ComponentExample component={CenteredDialogExample}/>
                <h1>Positioned Dialog</h1>
                <ComponentExample component={PositionedDialogExample}/>
                <h1>Alert Dialog Examples</h1>
                <ComponentExample component={AlertDialogExamples}/>
            </Column>
        </DocContainer>
    )
}