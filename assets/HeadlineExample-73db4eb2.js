import{C as a}from"./index-c98928aa.js";import{H as i}from"./index-b1181c6a.js";import{S as n}from"./Size-fe6876e6.js";import{c as e}from"./entry-client-c6070623.js";import"./index-108c4257.js";function l(){return e(a,{get children(){return[e(i,{get size(){return n.Small},children:"My Small Headline"}),e(i,{get size(){return n.Medium},children:"My Medium Headline"}),e(i,{get size(){return n.Large},children:"My Large Headline"})]}})}l.code=`import {Column} from "@qinetik/anique/column";
import {Headline} from "@qinetik/anique/headline";
import {Size} from "@qinetik/anique/theme/Size";

export default function HeadlineExample() {
    return (
        <Column>
            <Headline size={Size.Small}>My Small Headline</Headline>
            <Headline size={Size.Medium}>My Medium Headline</Headline>
            <Headline size={Size.Large}>My Large Headline</Headline>
        </Column>
    )
}`;export{l as default};
