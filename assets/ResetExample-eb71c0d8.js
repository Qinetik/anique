import{b as n,c as a,g as o,r,n as l,t as p}from"./entry-client-efb8f723.js";import"./index-e694302e.js";import"./Theme-c9d85115.js";import"./index-149a8a7e.js";import"./index-299bfccf.js";import"./index-b09005ba.js";import{h as m}from"./index-14c4e9b6.js";import"./index-01de8884.js";import"./index-d49a5ec8.js";import"./index-5b708f90.js";import"./index-1bac3de3.js";import"./index-0af3ff77.js";import"./index-74c14fc3.js";import"./index-2f6b9236.js";import"./index-ceddf797.js";import"./index-fc4b21a7.js";import"./index-38fd54ad.js";import"./index-18364d7e.js";import"./index-058de43f.js";import"./index-b793009e.js";import"./UL-596ed081.js";import"./index-a48d6eab.js";import"./index-0c52bc5d.js";import"./index-fb659094.js";import"./css-7a3f4315.js";import"./keyframes-17273c02.js";const s=p("<button class=primary-button>Reset");function u(){const[e,i]=n(null,{equals:!1});return[a(m,{get initialValue(){return e()},options:["apple","banana","pear","pineapple","kiwi"]}),(()=>{const t=o(s);return t.$$click=()=>i(null),r(),t})()]}u.code=`import {createSignal} from "solid-js";
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
