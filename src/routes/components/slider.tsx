import {Column} from "@qinetik/anique/column";
import {Headline} from "@qinetik/anique/headline";
import {Card} from "@qinetik/anique/card";
import {Slider} from "@qinetik/anique/slider";
import {Size} from "@qinetik/anique/theme/Size";
import {Row} from "@qinetik/anique/row";
import {createSignal} from "solid-js";
import {DocContainer} from "../../components/common/layout/DocContainer";

export default function SliderPage() {
    const [value, setValue] = createSignal(0)

    const XSlider = (props: { size: Size }) => {
        return (
            <Slider type={"range"}
                    value={value()}
                    onInput={(e) => setValue(parseInt(e.target.value))}
                    size={props.size}
            />
        )
    }

    return (
        <DocContainer>
            <Column>
                <Headline>Slider</Headline>
                <Column gap={"2em"}>
                    <Card>
                        <Row>
                            <Column>
                                <XSlider size={Size.Small}/>
                                <XSlider size={Size.Small}/>
                                <XSlider size={Size.Small}/>
                            </Column>
                            <Column>
                                <XSlider size={Size.Medium}/>
                                <XSlider size={Size.Medium}/>
                                <XSlider size={Size.Medium}/>
                            </Column>
                            <Column>
                                <XSlider size={Size.Large}/>
                                <XSlider size={Size.Large}/>
                                <XSlider size={Size.Large}/>
                            </Column>
                        </Row>
                    </Card>
                    <h1>Size Variations</h1>
                    <Card>
                        <Column>
                            <XSlider size={Size.Small}/>
                            <XSlider size={Size.Medium}/>
                            <XSlider size={Size.Large}/>
                            <XSlider size={3}/>
                            <XSlider size={4}/>
                            <XSlider size={5}/>
                        </Column>
                    </Card>
                </Column>
            </Column>
        </DocContainer>
    )
}