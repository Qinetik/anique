import"./index-123f5b0d.js";import"./Theme-c9d85115.js";import"./index-8e5bd437.js";import{b as c,y as m,z as l,o as u,c as f}from"./entry-client-b1cdb755.js";import"./index-b3b79d55.js";import"./index-9819aab5.js";import{e as h}from"./index-8f15c368.js";import"./index-69b2c138.js";import"./index-072e3436.js";import"./index-6bcccf20.js";import"./index-b9566db1.js";import"./index-023d75c5.js";import"./index-2758a2ec.js";import"./index-70c7726a.js";import"./index-11fb7b74.js";import"./index-f7f81b39.js";import"./index-fe3b8c3b.js";import"./index-2c8603ad.js";import"./index-15598541.js";import"./index-0be5e0ec.js";import"./index-a1f40fe4.js";import"./UnstyledLink-f3bad3fa.js";import"./index-f148c6eb.js";import"./index-96651276.js";import"./index-01a819b4.js";import"./css-b493a813.js";import"./keyframes-e9a77a12.js";const y=(e,n=250)=>{const[t,r]=c(""),o=d(e,n),[i]=m(t,o,{initialValue:[]});return{get options(){return i()},get loading(){return i.loading},onInput:r,readonly:!1}},d=(e,n)=>{let t=null,r,o;const i=()=>new Promise(p=>r=setTimeout(p,n)),s=(...p)=>(o=p,t||(t=i().then(()=>(t=null,e(...o))),t)),a=()=>{clearTimeout(r),t=null};return l()&&u(a),Object.assign(s,{clear:a})},w=async e=>await new Promise(n=>{setTimeout(()=>n(["apple","banana","pear","pineapple","kiwi"].filter(t=>t.startsWith(e))),2e3)});function g(){const e=y(w);return f(h,e)}g.code=`import {createAsyncOptions, Select} from "@qinetik/anique";

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
