import {Column, Headline} from "@qinetik/anique";
import {DocContainer} from "../../../components/common/layout/DocContainer";
import {ComponentExample} from "../../../solid/components/ComponentExample";
import HoverableDropdownExample from "./examples/HoverableDropdownExample";
import DropdownExample from "./examples/DropdownExample";
import CardActionsDropdownExample from "./examples/CardActionsDropdownExample";

export default function DropdownPage() {
    return (
        <DocContainer>
            <Column>
                <Headline>Dropdown Menu </Headline>
                <Column gap={"1em"}>
                    <ComponentExample component={HoverableDropdownExample}/>
                    <ComponentExample component={DropdownExample}/>
                    <ComponentExample component={CardActionsDropdownExample} hasBackground={false} cardStyles={{ padding : 0 }}/>
                </Column>
            </Column>
        </DocContainer>
    )
}