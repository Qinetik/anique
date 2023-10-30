import {Column} from "@qinetik/anique/column";
import {Size} from "@qinetik/anique/theme";
import {createSignal} from "solid-js";
import {Slider} from "@qinetik/anique/slider";

export default function SliderVariationsExample() {

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
        <Column>
            <XSlider size={Size.Small}/>
            <XSlider size={Size.Medium}/>
            <XSlider size={Size.Large}/>
            <XSlider size={3}/>
            <XSlider size={4}/>
            <XSlider size={5}/>
        </Column>
    )
}