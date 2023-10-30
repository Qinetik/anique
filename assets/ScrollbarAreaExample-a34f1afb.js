import{c as o,g as i,i as m,t as n}from"./entry-client-2fda6d46.js";import"./index-bb5a5d3d.js";import"./Theme-c9d85115.js";import"./index-50dde1b3.js";import"./index-d65ca23f.js";import"./index-880dcc90.js";import{g as a}from"./index-8c496293.js";import"./index-7a43a4af.js";import"./index-e7aa7392.js";import"./index-f62fd80e.js";import"./index-d1f62f4a.js";import"./index-710de314.js";import"./index-a88f9566.js";import"./index-b47d8711.js";import"./index-78db38af.js";import"./index-7a2b10b5.js";import"./index-57b39e9e.js";import"./index-04a91ab9.js";import"./index-31fb525c.js";import"./index-f6060dd8.js";import"./UL-a265d12a.js";import"./index-11ea25b9.js";import"./index-d7a2bb4c.js";import"./index-927437be.js";import{c as l}from"./createGlobalStyle-954222f7.js";import"./css-a2b805a8.js";import"./keyframes-489867ef.js";const p=n("<div class=item>"),s=l`
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
