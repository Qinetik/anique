import{b,g,a as i,i as l,c as d,t as S}from"./entry-client-2ac2a0bd.js";import"./index-6df8a466.js";import"./Theme-c9d85115.js";import"./index-049cff28.js";import"./index-9f77492a.js";import"./index-5cdee6ed.js";import{h as $}from"./index-1f767762.js";import"./index-2e914305.js";import"./index-756d1732.js";import"./index-11ae770f.js";import"./index-7069a893.js";import"./index-046c679b.js";import"./index-b9c452d6.js";import"./index-328ce4fc.js";import"./index-5b9b80c5.js";import"./index-a7d06282.js";import"./index-7eaad697.js";import"./index-ca0b38ae.js";import"./index-0f5f71d8.js";import"./index-18f0bfa9.js";import"./UL-ae71d882.js";import"./index-2a59ccac.js";import"./index-180ab7c4.js";import"./index-cf8204f2.js";import"./css-39caad62.js";import"./keyframes-dbb20f19.js";const v=S('<div class="flex flex-1 flex-col max-w-100 gap-3"><!$><!/><div class=text-sm>Current value: <!$><!/>');function _(){const o=[{name:"apple",label:"🍏 Apple"},{name:"banana",label:"🍌 Banana"},{name:"pear",label:"🍐 Pear"},{name:"pineapple",label:"🍍 Pineappe"},{name:"kiwi",label:"🥝 Kiwi"}],p=(e,t)=>t==="option"?e.label:e.name,[r,m]=b(null);return(()=>{const e=g(v),t=e.firstChild,[n,s]=i(t.nextSibling),a=n.nextSibling,c=a.firstChild,f=c.nextSibling,[u,x]=i(f.nextSibling);return l(e,d($,{options:o,format:p,onChange:m}),n,s),l(a,()=>JSON.stringify(r()),u,x),e})()}_.code=`import {createSignal} from "solid-js";
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
