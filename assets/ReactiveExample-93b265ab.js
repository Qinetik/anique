import{b as r,c as o}from"./entry-client-f8a4ae77.js";import"./index-1349e2ee.js";import"./Theme-c9d85115.js";import"./index-9faa6ccb.js";import"./index-e26dcbaa.js";import"./index-c7e055fe.js";import{e as p}from"./index-c2ccd6b4.js";import"./index-950dbaca.js";import"./index-790f0904.js";import"./index-459eedf5.js";import"./index-5487e511.js";import"./index-69169d02.js";import"./index-2ccff704.js";import"./index-87c6ec70.js";import"./index-3bfb6c94.js";import"./index-02608a48.js";import"./index-57c7de99.js";import"./index-64764018.js";import"./index-04f85821.js";import"./index-85412099.js";import"./index-cbf5d0c2.js";import"./UnstyledLink-d0c164d4.js";import"./index-b8dd5fd3.js";import"./index-6f1cfc45.js";import"./index-a8521333.js";import"./css-37145586.js";import"./keyframes-5ac2df48.js";function n(){const i={fruit:["apple","banana","pear","pineapple","kiwi"],starwars:["jedi","sith","stormtrooper","luke","leia"]},[t,e]=r("fruit");return o(p,{get options(){return i[t()]},onChange:()=>e(t()==="fruit"?"starwars":"fruit")})}n.code=`import {createSignal} from "solid-js";
import {Select} from "@qinetik/anique";

export default function ReactiveExample() {
    const optionSets = {
        fruit: ["apple", "banana", "pear", "pineapple", "kiwi"],
        starwars: ["jedi", "sith", "stormtrooper", "luke", "leia"],
    };
    const [activeSet, setActiveSet] = createSignal("fruit");

    return (
        <Select
            options={optionSets[activeSet()]}
            onChange={() =>
                setActiveSet(activeSet() === "fruit" ? "starwars" : "fruit")
            }
        />
    );
};`;export{n as default};
