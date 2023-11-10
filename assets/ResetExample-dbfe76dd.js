import{b as n,c as a,g as o,r,p,t as l}from"./entry-client-c6070623.js";import"./index-108c4257.js";import"./Theme-c9d85115.js";import"./index-923cd83d.js";import"./index-ebb683f1.js";import"./index-222b9f4a.js";import{e as m}from"./index-22b1ace7.js";import"./index-66667bdf.js";import"./index-eeee74a7.js";import"./index-c98928aa.js";import"./index-6082ff86.js";import"./index-8335c2a4.js";import"./index-b1181c6a.js";import"./index-6856f9e6.js";import"./index-abcb63f9.js";import"./index-1b661b3f.js";import"./index-0ebd6ae5.js";import"./index-f5fca8e5.js";import"./index-0b681d21.js";import"./index-2a05b8f3.js";import"./index-aae78141.js";import"./UnstyledLink-0663e860.js";import"./index-01205ea4.js";import"./index-05974638.js";import"./index-6a98188b.js";import"./index-12602de8.js";import"./css-c6273b18.js";import"./keyframes-2d272afe.js";const s=l("<button class=primary-button>Reset");function u(){const[i,e]=n(null,{equals:!1});return[a(m,{get initialValue(){return i()},options:["apple","banana","pear","pineapple","kiwi"]}),(()=>{const t=o(s);return t.$$click=()=>e(null),r(),t})()]}u.code=`import {createSignal} from "solid-js";
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
};`;p(["click"]);export{u as default};
