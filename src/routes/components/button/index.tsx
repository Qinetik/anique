import {Column} from "@qinetik/anique/column";
import {Headline} from "@qinetik/anique/headline";
import {Size} from "@qinetik/anique/theme/Size";
import {ComponentExample} from "../../../solid/components/ComponentExample";
import BasicButtonExample from "./examples/BasicButtonExample";
import ButtonVariationsExample from "./examples/ButtonVariationsExample";
import DisabledButtonExample from "./examples/DisabledButtonExample";
import {DocContainer} from "../../../components/common/layout/DocContainer";
import {Spacer} from "@qinetik/anique";

export default function ButtonPage() {
    return (
        <DocContainer>
            <Column>
                <Headline size={Size.Small}>Button</Headline>
                <h1>Normal Button</h1>
                <ComponentExample component={BasicButtonExample}/>
                <h1>Size Variations</h1>
                <ComponentExample component={ButtonVariationsExample}/>
                <h1>Disabled</h1>
                <ComponentExample component={DisabledButtonExample}/>
            </Column>
        </DocContainer>
    )
}