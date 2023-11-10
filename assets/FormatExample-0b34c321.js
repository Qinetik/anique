import{b,g,a as i,i as l,c as d,t as S}from"./entry-client-fa648c77.js";import"./index-5be97176.js";import"./Theme-c9d85115.js";import"./index-a3de9b85.js";import"./index-906196f8.js";import"./index-738815bd.js";import{e as $}from"./index-fb0f364b.js";import"./index-ebcf5fc7.js";import"./index-a21d93e6.js";import"./index-eba976b2.js";import"./index-58fbaa55.js";import"./index-a7e4fca9.js";import"./index-9ecd4929.js";import"./index-a4a13cad.js";import"./index-2e5e112a.js";import"./index-cf2526ba.js";import"./index-5056258d.js";import"./index-519a8c4a.js";import"./index-87410e23.js";import"./index-2434b60c.js";import"./index-756cf6ab.js";import"./UnstyledLink-08d09b7e.js";import"./index-eaf0e709.js";import"./index-7e475d78.js";import"./index-47d93bee.js";import"./index-498a4fb2.js";import"./css-6ecff688.js";import"./keyframes-f5879c2d.js";const v=S('<div class="flex flex-1 flex-col max-w-100 gap-3"><!$><!/><div class=text-sm>Current value: <!$><!/>');function _(){const o=[{name:"apple",label:"🍏 Apple"},{name:"banana",label:"🍌 Banana"},{name:"pear",label:"🍐 Pear"},{name:"pineapple",label:"🍍 Pineappe"},{name:"kiwi",label:"🥝 Kiwi"}],p=(e,t)=>t==="option"?e.label:e.name,[r,m]=b(null);return(()=>{const e=g(v),t=e.firstChild,[n,s]=i(t.nextSibling),a=n.nextSibling,c=a.firstChild,f=c.nextSibling,[u,x]=i(f.nextSibling);return l(e,d($,{options:o,format:p,onChange:m}),n,s),l(a,()=>JSON.stringify(r()),u,x),e})()}_.code=`import {createSignal} from "solid-js";
import {Select} from "@qinetik/anique";

export default function FormatExample() {
    const options = [
        {name: "apple", label: "🍏 Apple"},
        {name: "banana", label: "🍌 Banana"},
        {name: "pear", label: "🍐 Pear"},
        {name: "pineapple", label: "🍍 Pineappe"},
        {name: "kiwi", label: "🥝 Kiwi"},
    ];

    const format = (item, type) => (type === "option" ? item.label : item.name);

    const [value, setValue] = createSignal(null);

    return (
        <div class="flex flex-1 flex-col max-w-100 gap-3">
            <Select options={options} format={format} onChange={setValue}/>
            <div class="text-sm">Current value: {JSON.stringify(value())}</div>
        </div>
    );
};`;export{_ as default};
