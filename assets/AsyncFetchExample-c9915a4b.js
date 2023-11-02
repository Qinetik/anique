import"./index-e694302e.js";import"./Theme-c9d85115.js";import"./index-149a8a7e.js";import{b as c,x as m,y as l,o as u,c as f}from"./entry-client-efb8f723.js";import"./index-299bfccf.js";import"./index-b09005ba.js";import{h}from"./index-14c4e9b6.js";import"./index-01de8884.js";import"./index-d49a5ec8.js";import"./index-5b708f90.js";import"./index-1bac3de3.js";import"./index-0af3ff77.js";import"./index-74c14fc3.js";import"./index-2f6b9236.js";import"./index-ceddf797.js";import"./index-fc4b21a7.js";import"./index-38fd54ad.js";import"./index-18364d7e.js";import"./index-058de43f.js";import"./index-b793009e.js";import"./UL-596ed081.js";import"./index-a48d6eab.js";import"./index-0c52bc5d.js";import"./index-fb659094.js";import"./css-7a3f4315.js";import"./keyframes-17273c02.js";const y=(e,n=250)=>{const[t,r]=c(""),o=d(e,n),[i]=m(t,o,{initialValue:[]});return{get options(){return i()},get loading(){return i.loading},onInput:r,readonly:!1}},d=(e,n)=>{let t=null,r,o;const i=()=>new Promise(a=>r=setTimeout(a,n)),s=(...a)=>(o=a,t||(t=i().then(()=>(t=null,e(...o))),t)),p=()=>{clearTimeout(r),t=null};return l()&&u(p),Object.assign(s,{clear:p})},w=async e=>await new Promise(n=>{setTimeout(()=>n(["apple","banana","pear","pineapple","kiwi"].filter(t=>t.startsWith(e))),2e3)});function g(){const e=y(w);return f(h,e)}g.code=`import {createAsyncOptions, Select} from "@qinetik/anique";

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
