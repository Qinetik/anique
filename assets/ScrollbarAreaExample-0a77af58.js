import{c as o,g as i,i as m,t as n}from"./entry-client-3af6d313.js";import"./index-94caafb4.js";import"./Theme-c9d85115.js";import"./index-bab6a310.js";import"./index-c5bef6b0.js";import"./index-cfa94871.js";import{g as a}from"./index-1830aefe.js";import"./index-6d8184a4.js";import"./index-f6f07d1f.js";import"./index-c4ee8099.js";import"./index-9d7cf436.js";import"./index-67eb7d25.js";import"./index-98966c2c.js";import"./index-5ba1b5d6.js";import"./index-51d3af24.js";import"./index-f7946e34.js";import"./index-68b47e9b.js";import"./index-7ed7999b.js";import"./index-7355db2b.js";import"./index-e32cadde.js";import"./UL-e6a4a899.js";import"./index-760a4f67.js";import"./index-24296090.js";import"./index-1bde3f1a.js";import{c as l}from"./createGlobalStyle-ac00ca6c.js";import"./css-e90cefea.js";import"./keyframes-6d33a2dc.js";const p=n("<div class=item>"),s=l`
    .area {
        height: 300px;
        overflow-y: auto;
    }

    .item {
        width: 80px;
        height: 20px;
        padding: 0.5em;
    }
`;function c(){let r=[];for(let t=0;t<25;t++)r=[...r,t];return[o(s,{}),o(a,{class:"area",get children(){return r.map(t=>(()=>{const e=i(p);return m(e,t),e})())}})]}c.code=`import {ScrollbarArea} from "@qinetik/anique";
import {createGlobalStyle} from "@qinetik/emotion";

const ScrollbarStyles = createGlobalStyle\`
    .area {
        height: 300px;
        overflow-y: auto;
    }

    .item {
        width: 80px;
        height: 20px;
        padding: 0.5em;
    }
\`

export default function ScrollbarAreaExample() {
    let items : number[] = []
    for(let i = 0; i< 25; i++) {
        items = [...items, i]
    }
    return (
        <>
            <ScrollbarStyles/>
            <ScrollbarArea class="area">
                {items.map((e) => (
                    <div class="item">{e}</div>
                ))}
            </ScrollbarArea>
        </>
    )
}`;export{c as default};
