import{b as r,c as o}from"./entry-client-23914c21.js";import"./index-6427a2f6.js";import"./Theme-c9d85115.js";import"./index-096f9d8e.js";import"./index-d1661098.js";import"./index-55909f5f.js";import{e as p}from"./index-58ae8ba7.js";import"./index-99dc85aa.js";import"./index-70649c9c.js";import"./index-0715b131.js";import"./index-05916829.js";import"./index-c124aee2.js";import"./index-1740d0a2.js";import"./index-1cfc4eeb.js";import"./index-9fac0c6a.js";import"./index-7e2460ae.js";import"./index-4d1252b9.js";import"./index-a2a937ad.js";import"./index-4b012459.js";import"./index-e59065e4.js";import"./index-c19d27c0.js";import"./UnstyledLink-395be662.js";import"./index-54c0212b.js";import"./index-3fa64ce4.js";import"./index-075dc7a0.js";import"./css-26601209.js";import"./keyframes-59a403a9.js";function n(){const i={fruit:["apple","banana","pear","pineapple","kiwi"],starwars:["jedi","sith","stormtrooper","luke","leia"]},[t,e]=r("fruit");return o(p,{get options(){return i[t()]},onChange:()=>e(t()==="fruit"?"starwars":"fruit")})}n.code=`import {createSignal} from "solid-js";
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
