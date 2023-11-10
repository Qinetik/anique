import{C as a}from"./index-459eedf5.js";import{H as i}from"./index-2ccff704.js";import{S as n}from"./Size-fe6876e6.js";import{c as e}from"./entry-client-f8a4ae77.js";import"./index-1349e2ee.js";function l(){return e(a,{get children(){return[e(i,{get size(){return n.Small},children:"My Small Headline"}),e(i,{get size(){return n.Medium},children:"My Medium Headline"}),e(i,{get size(){return n.Large},children:"My Large Headline"})]}})}l.code=`import {Column} from "@qinetik/anique/column";
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
