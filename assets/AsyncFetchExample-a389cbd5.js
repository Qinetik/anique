import"./index-326c8233.js";import"./Theme-c9d85115.js";import"./index-505673d9.js";import{b as c,x as m,y as l,o as u,c as f}from"./entry-client-e7f04580.js";import"./index-99f4859e.js";import"./index-c9b3d057.js";import{e as h}from"./index-7a72bcca.js";import"./index-ce1ffc42.js";import"./index-4460cad9.js";import"./index-7c3e3388.js";import"./index-26e5468d.js";import"./index-5dd4f3c1.js";import"./index-713cd9c3.js";import"./index-5e9d9ab7.js";import"./index-6e455505.js";import"./index-4b92b0d7.js";import"./index-f5b55317.js";import"./index-395e79e9.js";import"./index-8515abcf.js";import"./index-1a03f1e0.js";import"./index-38ea9e49.js";import"./UnstyledLink-3a662916.js";import"./index-6e8c2b16.js";import"./index-744ba056.js";import"./index-eb07a99c.js";import"./css-9de456a1.js";import"./keyframes-f88073d5.js";const y=(e,n=250)=>{const[t,r]=c(""),o=d(e,n),[i]=m(t,o,{initialValue:[]});return{get options(){return i()},get loading(){return i.loading},onInput:r,readonly:!1}},d=(e,n)=>{let t=null,r,o;const i=()=>new Promise(p=>r=setTimeout(p,n)),s=(...p)=>(o=p,t||(t=i().then(()=>(t=null,e(...o))),t)),a=()=>{clearTimeout(r),t=null};return l()&&u(a),Object.assign(s,{clear:a})},w=async e=>await new Promise(n=>{setTimeout(()=>n(["apple","banana","pear","pineapple","kiwi"].filter(t=>t.startsWith(e))),2e3)});function g(){const e=y(w);return f(h,e)}g.code=`import {createAsyncOptions, Select} from "@qinetik/anique";

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
