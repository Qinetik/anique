import {Row} from "@qinetik/anique/row";
import {Column} from "@qinetik/anique/column";
import {Size} from "@qinetik/anique/theme";
import {Slider} from "@qinetik/anique/slider";
import {createSignal} from "solid-js";

export default function BasicSliderExample() {

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
    )
}