import {Column, Headline} from "@qinetik/anique";
import {ComponentExample} from "../../../solid/components/ComponentExample";
import BasicChipExample from "./examples/BasicChipExample";
import ChipColorVariationsExample from "./examples/ChipColorVariationsExample";
import {DocContainer} from "../../../components/common/layout/DocContainer";
import ChipWithIconsExample from "./examples/ChipWithIconsExample";
import ClickableChipExample from "./examples/ClickableChipExample";

export default function ChipPage() {
    return (
        <DocContainer>
            <Column>
                <Headline>Chip</Headline>
                <ComponentExample component={BasicChipExample}/>
                <h1>Color Variations</h1>
                <ComponentExample component={ChipColorVariationsExample}/>
                <h1>Chip with Icons</h1>
                <ComponentExample component={ChipWithIconsExample}/>
                <h1>Clickable Chip</h1>
                <ComponentExample component={ClickableChipExample}/>
            </Column>
        </DocContainer>
    )
}