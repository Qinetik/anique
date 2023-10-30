import {Column, Headline} from "@qinetik/anique";
import {DocContainer} from "../../../components/common/layout/DocContainer";
import {ComponentExample} from "../../../solid/components/ComponentExample";
import HoverableDropdownExample from "./examples/HoverableDropdownExample";
import DropdownExample from "./examples/DropdownExample";

export default function DropdownPage() {
    return (
        <DocContainer>
            <Column>
                <Headline>Dropdown Menu </Headline>
                <Column gap={"1em"}>
                    <ComponentExample component={HoverableDropdownExample}/>
                    <ComponentExample component={DropdownExample}/>
                </Column>
            </Column>
        </DocContainer>
    )
}