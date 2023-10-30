import{R as o}from"./index-7a2b10b5.js";import{C as i}from"./index-e7aa7392.js";import{S as n}from"./Size-fe6876e6.js";import"./Theme-c9d85115.js";import{b as m,c as e}from"./entry-client-2fda6d46.js";import"./index-bb5a5d3d.js";import{S as s}from"./index-57b39e9e.js";function S(){const[t,l]=m(0),r=u=>e(s,{type:"range",get value(){return t()},onInput:a=>l(parseInt(a.target.value)),get size(){return u.size}});return e(o,{get children(){return[e(i,{get children(){return[e(r,{get size(){return n.Small}}),e(r,{get size(){return n.Small}}),e(r,{get size(){return n.Small}})]}}),e(i,{get children(){return[e(r,{get size(){return n.Medium}}),e(r,{get size(){return n.Medium}}),e(r,{get size(){return n.Medium}})]}}),e(i,{get children(){return[e(r,{get size(){return n.Large}}),e(r,{get size(){return n.Large}}),e(r,{get size(){return n.Large}})]}})]}})}S.code=`import {Row} from "@qinetik/anique/row";
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
}`;export{S as default};
