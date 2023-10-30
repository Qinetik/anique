import {Column} from "@qinetik/anique/column";
import {Headline} from "@qinetik/anique/headline";
import {ComponentExample} from "../../../solid/components/ComponentExample";
import BasicSliderExample from "./examples/BasicSliderExample";
import SliderVariationsExample from "./examples/SliderVariationsExample";
import {DocContainer} from "../../../components/common/layout/DocContainer";

export default function SliderPage() {
    return (
        <DocContainer>
            <Column>
                <Headline>Slider</Headline>
                <Column gap={"2em"}>
                    <ComponentExample component={BasicSliderExample}/>
                    <ComponentExample component={SliderVariationsExample}/>
                </Column>
            </Column>
        </DocContainer>
    )
}