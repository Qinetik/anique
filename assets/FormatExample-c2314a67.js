import{b,g,a as i,i as l,c as d,t as S}from"./entry-client-efb8f723.js";import"./index-e694302e.js";import"./Theme-c9d85115.js";import"./index-149a8a7e.js";import"./index-299bfccf.js";import"./index-b09005ba.js";import{h as $}from"./index-14c4e9b6.js";import"./index-01de8884.js";import"./index-d49a5ec8.js";import"./index-5b708f90.js";import"./index-1bac3de3.js";import"./index-0af3ff77.js";import"./index-74c14fc3.js";import"./index-2f6b9236.js";import"./index-ceddf797.js";import"./index-fc4b21a7.js";import"./index-38fd54ad.js";import"./index-18364d7e.js";import"./index-058de43f.js";import"./index-b793009e.js";import"./UL-596ed081.js";import"./index-a48d6eab.js";import"./index-0c52bc5d.js";import"./index-fb659094.js";import"./css-7a3f4315.js";import"./keyframes-17273c02.js";const v=S('<div class="flex flex-1 flex-col max-w-100 gap-3"><!$><!/><div class=text-sm>Current value: <!$><!/>');function _(){const o=[{name:"apple",label:"🍏 Apple"},{name:"banana",label:"🍌 Banana"},{name:"pear",label:"🍐 Pear"},{name:"pineapple",label:"🍍 Pineappe"},{name:"kiwi",label:"🥝 Kiwi"}],p=(e,t)=>t==="option"?e.label:e.name,[r,m]=b(null);return(()=>{const e=g(v),t=e.firstChild,[n,s]=i(t.nextSibling),a=n.nextSibling,c=a.firstChild,f=c.nextSibling,[u,x]=i(f.nextSibling);return l(e,d($,{options:o,format:p,onChange:m}),n,s),l(a,()=>JSON.stringify(r()),u,x),e})()}_.code=`import {createSignal} from "solid-js";
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
