import{c as o,g as i,i as m,t as n}from"./entry-client-fa648c77.js";import"./index-5be97176.js";import"./Theme-c9d85115.js";import"./index-a3de9b85.js";import"./index-906196f8.js";import"./index-738815bd.js";import{d as a}from"./index-fb0f364b.js";import"./index-ebcf5fc7.js";import"./index-a21d93e6.js";import"./index-eba976b2.js";import"./index-58fbaa55.js";import"./index-a7e4fca9.js";import"./index-9ecd4929.js";import"./index-a4a13cad.js";import"./index-2e5e112a.js";import"./index-cf2526ba.js";import"./index-5056258d.js";import"./index-519a8c4a.js";import"./index-87410e23.js";import"./index-2434b60c.js";import"./index-756cf6ab.js";import"./UnstyledLink-08d09b7e.js";import"./index-eaf0e709.js";import"./index-7e475d78.js";import"./index-47d93bee.js";import"./index-498a4fb2.js";import{c as l}from"./createGlobalStyle-758c7b5a.js";import"./css-6ecff688.js";import"./keyframes-f5879c2d.js";const p=n("<div class=item>"),s=l`
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
