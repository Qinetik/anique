import{c as o,g as i,i as m,t as n}from"./entry-client-23914c21.js";import"./index-6427a2f6.js";import"./Theme-c9d85115.js";import"./index-096f9d8e.js";import"./index-d1661098.js";import"./index-55909f5f.js";import{d as a}from"./index-58ae8ba7.js";import"./index-99dc85aa.js";import"./index-70649c9c.js";import"./index-0715b131.js";import"./index-05916829.js";import"./index-c124aee2.js";import"./index-1740d0a2.js";import"./index-1cfc4eeb.js";import"./index-9fac0c6a.js";import"./index-7e2460ae.js";import"./index-4d1252b9.js";import"./index-a2a937ad.js";import"./index-4b012459.js";import"./index-e59065e4.js";import"./index-c19d27c0.js";import"./UnstyledLink-395be662.js";import"./index-54c0212b.js";import"./index-3fa64ce4.js";import"./index-075dc7a0.js";import{c as l}from"./createGlobalStyle-f360b4d7.js";import"./css-26601209.js";import"./keyframes-59a403a9.js";const p=n("<div class=item>"),s=l`
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
