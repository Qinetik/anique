import{c as e,g as t,t as o}from"./entry-client-b1cdb755.js";import{N as n}from"./index-11fb7b74.js";import"./index-123f5b0d.js";import"./Theme-c9d85115.js";const i=o("<option>My option 1"),p=o("<option>My option 2"),l=o("<option>My option 3"),r=o("<option>My option 4");function m(){return e(n,{multiple:!0,get children(){return[t(i),t(p),t(l),t(r)]}})}m.code=`import {NativeSelect} from "@qinetik/anique/native-select";

export default function MultipleNSelectExample() {
    return (
        <NativeSelect multiple={true}>
            <option>My option 1</option>
            <option>My option 2</option>
            <option>My option 3</option>
            <option>My option 4</option>
        </NativeSelect>
    )
}`;export{m as default};
