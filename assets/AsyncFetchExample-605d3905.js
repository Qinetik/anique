import"./index-94caafb4.js";import"./Theme-c9d85115.js";import"./index-bab6a310.js";import{b as c,x as m,y as l,o as u,c as f}from"./entry-client-3af6d313.js";import"./index-c5bef6b0.js";import"./index-cfa94871.js";import{h}from"./index-1830aefe.js";import"./index-6d8184a4.js";import"./index-f6f07d1f.js";import"./index-c4ee8099.js";import"./index-9d7cf436.js";import"./index-67eb7d25.js";import"./index-98966c2c.js";import"./index-5ba1b5d6.js";import"./index-51d3af24.js";import"./index-f7946e34.js";import"./index-68b47e9b.js";import"./index-7ed7999b.js";import"./index-7355db2b.js";import"./index-e32cadde.js";import"./UL-e6a4a899.js";import"./index-760a4f67.js";import"./index-24296090.js";import"./index-1bde3f1a.js";import"./css-e90cefea.js";import"./keyframes-6d33a2dc.js";const y=(e,n=250)=>{const[t,r]=c(""),o=d(e,n),[i]=m(t,o,{initialValue:[]});return{get options(){return i()},get loading(){return i.loading},onInput:r,readonly:!1}},d=(e,n)=>{let t=null,r,o;const i=()=>new Promise(a=>r=setTimeout(a,n)),s=(...a)=>(o=a,t||(t=i().then(()=>(t=null,e(...o))),t)),p=()=>{clearTimeout(r),t=null};return l()&&u(p),Object.assign(s,{clear:p})},w=async e=>await new Promise(n=>{setTimeout(()=>n(["apple","banana","pear","pineapple","kiwi"].filter(t=>t.startsWith(e))),2e3)});function g(){const e=y(w);return f(h,e)}g.code=`import {createAsyncOptions, Select} from "@qinetik/anique";

const fetchData = async (inputValue) => {
    return await new Promise((resolve) => {
        setTimeout(
            () =>
                resolve(
                    ["apple", "banana", "pear", "pineapple", "kiwi"].filter((option) =>
                        option.startsWith(inputValue)
                    )
                ),
            2000
        );
    });
};
export default function AsyncFetchExample(){
    const props = createAsyncOptions(fetchData);
    return <Select {...props} />;
};`;export{g as default};
