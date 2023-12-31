import {Column, Headline} from "@qinetik/anique";
import {DocContainer} from "../../../components/common/layout/DocContainer";
import {ComponentExample} from "../../../solid/components/ComponentExample";
import HoverableDropdownExample from "./examples/HoverableDropdownExample";
import DropdownExample from "./examples/DropdownExample";
import DropdownDialogExample from "./examples/DropdownDialogExample";
import CardActionsDropdownExample from "./examples/CardActionsDropdownExample";

export default function DropdownPage() {
    return (
        <DocContainer>
            <Column>
                <Headline>Dropdown Menu </Headline>
                <Column gap={"1em"}>
                    <ComponentExample component={HoverableDropdownExample}/>
                    <ComponentExample component={DropdownExample}/>
                    <ComponentExample component={DropdownDialogExample} />
                    <ComponentExample component={CardActionsDropdownExample} cardStyles={{ padding : 0}} hasBackground={false}/>
                </Column>
            </Column>
        </DocContainer>
    )
}