import"./index-108c4257.js";import"./Theme-c9d85115.js";import"./index-923cd83d.js";import{c as t}from"./entry-client-c6070623.js";import"./index-ebb683f1.js";import"./index-222b9f4a.js";import{e as p}from"./index-22b1ace7.js";import"./index-66667bdf.js";import"./index-eeee74a7.js";import"./index-c98928aa.js";import"./index-6082ff86.js";import"./index-8335c2a4.js";import"./index-b1181c6a.js";import"./index-6856f9e6.js";import"./index-abcb63f9.js";import"./index-1b661b3f.js";import"./index-0ebd6ae5.js";import{c as r}from"./create-options-c814fb9e.js";import"./index-f5fca8e5.js";import"./index-0b681d21.js";import"./index-2a05b8f3.js";import"./index-aae78141.js";import"./UnstyledLink-0663e860.js";import"./index-01205ea4.js";import"./index-05974638.js";import"./index-6a98188b.js";import"./index-12602de8.js";import"./css-c6273b18.js";import"./keyframes-2d272afe.js";function n(){const e=r([{name:"apple"},{name:"banana"},{name:"pear"},{name:"pineapple"},{name:"kiwi"}],{key:"name",createable:!0});return t(p,e)}n.code=`import {createOptions, Select} from "@qinetik/anique";

export default function CreateableObjectsExample() {
    const props = createOptions(
        [
            {name: "apple"},
            {name: "banana"},
            {name: "pear"},
            {name: "pineapple"},
            {name: "kiwi"},
        ],
        {
            key: "name",
            createable: true,
        }
    );
    return <Select {...props} />;
};`;export{n as default};
