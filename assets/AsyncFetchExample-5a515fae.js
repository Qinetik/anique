import"./index-6df8a466.js";import"./Theme-c9d85115.js";import"./index-049cff28.js";import{b as c,x as m,y as l,o as u,c as f}from"./entry-client-2ac2a0bd.js";import"./index-9f77492a.js";import"./index-5cdee6ed.js";import{h}from"./index-1f767762.js";import"./index-2e914305.js";import"./index-756d1732.js";import"./index-11ae770f.js";import"./index-7069a893.js";import"./index-046c679b.js";import"./index-b9c452d6.js";import"./index-328ce4fc.js";import"./index-5b9b80c5.js";import"./index-a7d06282.js";import"./index-7eaad697.js";import"./index-ca0b38ae.js";import"./index-0f5f71d8.js";import"./index-18f0bfa9.js";import"./UL-ae71d882.js";import"./index-2a59ccac.js";import"./index-180ab7c4.js";import"./index-cf8204f2.js";import"./css-39caad62.js";import"./keyframes-dbb20f19.js";const y=(e,n=250)=>{const[t,r]=c(""),o=d(e,n),[i]=m(t,o,{initialValue:[]});return{get options(){return i()},get loading(){return i.loading},onInput:r,readonly:!1}},d=(e,n)=>{let t=null,r,o;const i=()=>new Promise(a=>r=setTimeout(a,n)),s=(...a)=>(o=a,t||(t=i().then(()=>(t=null,e(...o))),t)),p=()=>{clearTimeout(r),t=null};return l()&&u(p),Object.assign(s,{clear:p})},w=async e=>await new Promise(n=>{setTimeout(()=>n(["apple","banana","pear","pineapple","kiwi"].filter(t=>t.startsWith(e))),2e3)});function g(){const e=y(w);return f(h,e)}g.code=`import {createAsyncOptions, Select} from "@qinetik/anique";

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
