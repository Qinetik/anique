import"./index-755bc77f.js";import"./Theme-c9d85115.js";import"./index-9b146908.js";import{c as t}from"./entry-client-a96cbc4d.js";import"./index-0f3f083d.js";import"./index-41256d2f.js";import{h as p}from"./index-b3c017de.js";import"./index-fe490c73.js";import"./index-df837084.js";import"./index-0b90490a.js";import"./index-1fc8dcd4.js";import"./index-2ede3e13.js";import"./index-1573e59b.js";import"./index-6baed7d3.js";import"./index-69f01235.js";import"./index-b49aba21.js";import{c as r}from"./create-options-c86d64f2.js";import"./index-d2d6e189.js";import"./index-8ce3d155.js";import"./index-ffe50960.js";import"./index-2f2b9ad8.js";import"./UL-412bb8d8.js";import"./index-0e33e01a.js";import"./index-3bdeeb8b.js";import"./index-e3dc129e.js";import"./css-884efc55.js";import"./keyframes-bd3d6767.js";function n(){const e=r([{name:"apple"},{name:"banana"},{name:"pear"},{name:"pineapple"},{name:"kiwi"}],{key:"name",createable:!0});return t(p,e)}n.code=`import {createOptions, Select} from "@qinetik/anique";

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
