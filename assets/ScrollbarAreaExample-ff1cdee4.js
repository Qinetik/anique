import{c as o,g as i,i as m,t as n}from"./entry-client-a96cbc4d.js";import"./index-755bc77f.js";import"./Theme-c9d85115.js";import"./index-9b146908.js";import"./index-0f3f083d.js";import"./index-41256d2f.js";import{g as a}from"./index-b3c017de.js";import"./index-fe490c73.js";import"./index-df837084.js";import"./index-0b90490a.js";import"./index-1fc8dcd4.js";import"./index-2ede3e13.js";import"./index-1573e59b.js";import"./index-6baed7d3.js";import"./index-69f01235.js";import"./index-b49aba21.js";import"./index-d2d6e189.js";import"./index-8ce3d155.js";import"./index-ffe50960.js";import"./index-2f2b9ad8.js";import"./UL-412bb8d8.js";import"./index-0e33e01a.js";import"./index-3bdeeb8b.js";import"./index-e3dc129e.js";import{c as l}from"./createGlobalStyle-b681c0b4.js";import"./css-884efc55.js";import"./keyframes-bd3d6767.js";const p=n("<div class=item>"),s=l`
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
