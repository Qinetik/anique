import{b as n,c as a,g as o,r,n as l,t as p}from"./entry-client-e7f04580.js";import"./index-326c8233.js";import"./Theme-c9d85115.js";import"./index-505673d9.js";import"./index-99f4859e.js";import"./index-c9b3d057.js";import{e as m}from"./index-7a72bcca.js";import"./index-ce1ffc42.js";import"./index-4460cad9.js";import"./index-7c3e3388.js";import"./index-26e5468d.js";import"./index-5dd4f3c1.js";import"./index-713cd9c3.js";import"./index-5e9d9ab7.js";import"./index-6e455505.js";import"./index-4b92b0d7.js";import"./index-f5b55317.js";import"./index-395e79e9.js";import"./index-8515abcf.js";import"./index-1a03f1e0.js";import"./index-38ea9e49.js";import"./UnstyledLink-3a662916.js";import"./index-6e8c2b16.js";import"./index-744ba056.js";import"./index-eb07a99c.js";import"./css-9de456a1.js";import"./keyframes-f88073d5.js";const s=p("<button class=primary-button>Reset");function u(){const[e,i]=n(null,{equals:!1});return[a(m,{get initialValue(){return e()},options:["apple","banana","pear","pineapple","kiwi"]}),(()=>{const t=o(s);return t.$$click=()=>i(null),r(),t})()]}u.code=`import {createSignal} from "solid-js";
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
