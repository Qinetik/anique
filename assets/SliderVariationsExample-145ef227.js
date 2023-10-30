import{C as o}from"./index-e7aa7392.js";import{S as r}from"./Size-fe6876e6.js";import"./Theme-c9d85115.js";import{b as s,c as e}from"./entry-client-2fda6d46.js";import"./index-bb5a5d3d.js";import{S as u}from"./index-57b39e9e.js";function m(){const[i,t]=s(0),n=a=>e(u,{type:"range",get value(){return i()},onInput:l=>t(parseInt(l.target.value)),get size(){return a.size}});return e(o,{get children(){return[e(n,{get size(){return r.Small}}),e(n,{get size(){return r.Medium}}),e(n,{get size(){return r.Large}}),e(n,{size:3}),e(n,{size:4}),e(n,{size:5})]}})}m.code=`import {Column} from "@qinetik/anique/column";
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
}`;export{m as default};
