import{S as n}from"./index-04a91ab9.js";import{R as r}from"./index-7a2b10b5.js";import{S as i}from"./Size-fe6876e6.js";import{c as e}from"./entry-client-2fda6d46.js";import"./index-bb5a5d3d.js";import"./Theme-c9d85115.js";import"./keyframes-489867ef.js";function t(){return e(r,{gap:"2em",get children(){return[e(n,{get size(){return i.Small}}),e(n,{get size(){return i.Medium}}),e(n,{get size(){return i.Large}}),e(n,{size:3}),e(n,{size:4})]}})}t.code=`import {Spinner} from "@qinetik/anique/spinner";
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
