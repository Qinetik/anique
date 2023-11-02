import{b as r,c as o}from"./entry-client-efb8f723.js";import"./index-e694302e.js";import"./Theme-c9d85115.js";import"./index-149a8a7e.js";import"./index-299bfccf.js";import"./index-b09005ba.js";import{h as p}from"./index-14c4e9b6.js";import"./index-01de8884.js";import"./index-d49a5ec8.js";import"./index-5b708f90.js";import"./index-1bac3de3.js";import"./index-0af3ff77.js";import"./index-74c14fc3.js";import"./index-2f6b9236.js";import"./index-ceddf797.js";import"./index-fc4b21a7.js";import"./index-38fd54ad.js";import"./index-18364d7e.js";import"./index-058de43f.js";import"./index-b793009e.js";import"./UL-596ed081.js";import"./index-a48d6eab.js";import"./index-0c52bc5d.js";import"./index-fb659094.js";import"./css-7a3f4315.js";import"./keyframes-17273c02.js";function n(){const i={fruit:["apple","banana","pear","pineapple","kiwi"],starwars:["jedi","sith","stormtrooper","luke","leia"]},[t,e]=r("fruit");return o(p,{get options(){return i[t()]},onChange:()=>e(t()==="fruit"?"starwars":"fruit")})}n.code=`import {createSignal} from "solid-js";
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
