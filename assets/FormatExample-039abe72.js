import{b,g,a as i,i as l,c as d,t as S}from"./entry-client-e7f04580.js";import"./index-326c8233.js";import"./Theme-c9d85115.js";import"./index-505673d9.js";import"./index-99f4859e.js";import"./index-c9b3d057.js";import{e as $}from"./index-7a72bcca.js";import"./index-ce1ffc42.js";import"./index-4460cad9.js";import"./index-7c3e3388.js";import"./index-26e5468d.js";import"./index-5dd4f3c1.js";import"./index-713cd9c3.js";import"./index-5e9d9ab7.js";import"./index-6e455505.js";import"./index-4b92b0d7.js";import"./index-f5b55317.js";import"./index-395e79e9.js";import"./index-8515abcf.js";import"./index-1a03f1e0.js";import"./index-38ea9e49.js";import"./UnstyledLink-3a662916.js";import"./index-6e8c2b16.js";import"./index-744ba056.js";import"./index-eb07a99c.js";import"./css-9de456a1.js";import"./keyframes-f88073d5.js";const v=S('<div class="flex flex-1 flex-col max-w-100 gap-3"><!$><!/><div class=text-sm>Current value: <!$><!/>');function _(){const o=[{name:"apple",label:"🍏 Apple"},{name:"banana",label:"🍌 Banana"},{name:"pear",label:"🍐 Pear"},{name:"pineapple",label:"🍍 Pineappe"},{name:"kiwi",label:"🥝 Kiwi"}],p=(e,t)=>t==="option"?e.label:e.name,[r,m]=b(null);return(()=>{const e=g(v),t=e.firstChild,[n,s]=i(t.nextSibling),a=n.nextSibling,c=a.firstChild,f=c.nextSibling,[u,x]=i(f.nextSibling);return l(e,d($,{options:o,format:p,onChange:m}),n,s),l(a,()=>JSON.stringify(r()),u,x),e})()}_.code=`import {createSignal} from "solid-js";
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
