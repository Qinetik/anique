import{b,g,a as i,i as l,c as d,t as S}from"./entry-client-f8a4ae77.js";import"./index-1349e2ee.js";import"./Theme-c9d85115.js";import"./index-9faa6ccb.js";import"./index-e26dcbaa.js";import"./index-c7e055fe.js";import{e as $}from"./index-c2ccd6b4.js";import"./index-950dbaca.js";import"./index-790f0904.js";import"./index-459eedf5.js";import"./index-5487e511.js";import"./index-69169d02.js";import"./index-2ccff704.js";import"./index-87c6ec70.js";import"./index-3bfb6c94.js";import"./index-02608a48.js";import"./index-57c7de99.js";import"./index-64764018.js";import"./index-04f85821.js";import"./index-85412099.js";import"./index-cbf5d0c2.js";import"./UnstyledLink-d0c164d4.js";import"./index-b8dd5fd3.js";import"./index-6f1cfc45.js";import"./index-a8521333.js";import"./css-37145586.js";import"./keyframes-5ac2df48.js";const v=S('<div class="flex flex-1 flex-col max-w-100 gap-3"><!$><!/><div class=text-sm>Current value: <!$><!/>');function _(){const o=[{name:"apple",label:"🍏 Apple"},{name:"banana",label:"🍌 Banana"},{name:"pear",label:"🍐 Pear"},{name:"pineapple",label:"🍍 Pineappe"},{name:"kiwi",label:"🥝 Kiwi"}],p=(e,t)=>t==="option"?e.label:e.name,[r,m]=b(null);return(()=>{const e=g(v),t=e.firstChild,[n,s]=i(t.nextSibling),a=n.nextSibling,c=a.firstChild,f=c.nextSibling,[u,x]=i(f.nextSibling);return l(e,d($,{options:o,format:p,onChange:m}),n,s),l(a,()=>JSON.stringify(r()),u,x),e})()}_.code=`import {createSignal} from "solid-js";
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
