import{b as n,c as a,g as o,r,n as l,t as p}from"./entry-client-3af6d313.js";import"./index-94caafb4.js";import"./Theme-c9d85115.js";import"./index-bab6a310.js";import"./index-c5bef6b0.js";import"./index-cfa94871.js";import{h as m}from"./index-1830aefe.js";import"./index-6d8184a4.js";import"./index-f6f07d1f.js";import"./index-c4ee8099.js";import"./index-9d7cf436.js";import"./index-67eb7d25.js";import"./index-98966c2c.js";import"./index-5ba1b5d6.js";import"./index-51d3af24.js";import"./index-f7946e34.js";import"./index-68b47e9b.js";import"./index-7ed7999b.js";import"./index-7355db2b.js";import"./index-e32cadde.js";import"./UL-e6a4a899.js";import"./index-760a4f67.js";import"./index-24296090.js";import"./index-1bde3f1a.js";import"./css-e90cefea.js";import"./keyframes-6d33a2dc.js";const s=p("<button class=primary-button>Reset");function u(){const[e,i]=n(null,{equals:!1});return[a(m,{get initialValue(){return e()},options:["apple","banana","pear","pineapple","kiwi"]}),(()=>{const t=o(s);return t.$$click=()=>i(null),r(),t})()]}u.code=`import {createSignal} from "solid-js";
import {Select} from "@qinetik/anique";

export default function ResetExample() {
    const [initialValue, setInitialValue] = createSignal(null, {equals: false});
    return (
        <>
            <Select
                initialValue={initialValue()}
                options={["apple", "banana", "pear", "pineapple", "kiwi"]}
            />
            <button class="primary-button" onClick={() => setInitialValue(null)}>
                Reset
            </button>
        </>
    );
};`;l(["click"]);export{u as default};
