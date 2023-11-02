import{S as n}from"./index-18364d7e.js";import{R as r}from"./index-fc4b21a7.js";import{S as i}from"./Size-fe6876e6.js";import{c as e}from"./entry-client-efb8f723.js";import"./index-e694302e.js";import"./Theme-c9d85115.js";import"./keyframes-17273c02.js";function t(){return e(r,{gap:"2em",get children(){return[e(n,{get size(){return i.Small}}),e(n,{get size(){return i.Medium}}),e(n,{get size(){return i.Large}}),e(n,{size:3}),e(n,{size:4})]}})}t.code=`import {Spinner} from "@qinetik/anique/spinner";
import {Row} from "@qinetik/anique/row";
import {Size} from "@qinetik/anique/theme/Size";

export default function SpinnerSizeExamples() {
    return (
        <Row gap={"2em"}>
            <Spinner size={Size.Small}/>
            <Spinner size={Size.Medium}/>
            <Spinner size={Size.Large}/>
            <Spinner size={3}/>
            <Spinner size={4}/>
        </Row>
    )
}`;export{t as default};
