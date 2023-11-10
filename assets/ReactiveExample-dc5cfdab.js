import{b as r,c as o}from"./entry-client-fa648c77.js";import"./index-5be97176.js";import"./Theme-c9d85115.js";import"./index-a3de9b85.js";import"./index-906196f8.js";import"./index-738815bd.js";import{e as p}from"./index-fb0f364b.js";import"./index-ebcf5fc7.js";import"./index-a21d93e6.js";import"./index-eba976b2.js";import"./index-58fbaa55.js";import"./index-a7e4fca9.js";import"./index-9ecd4929.js";import"./index-a4a13cad.js";import"./index-2e5e112a.js";import"./index-cf2526ba.js";import"./index-5056258d.js";import"./index-519a8c4a.js";import"./index-87410e23.js";import"./index-2434b60c.js";import"./index-756cf6ab.js";import"./UnstyledLink-08d09b7e.js";import"./index-eaf0e709.js";import"./index-7e475d78.js";import"./index-47d93bee.js";import"./index-498a4fb2.js";import"./css-6ecff688.js";import"./keyframes-f5879c2d.js";function n(){const i={fruit:["apple","banana","pear","pineapple","kiwi"],starwars:["jedi","sith","stormtrooper","luke","leia"]},[t,e]=r("fruit");return o(p,{get options(){return i[t()]},onChange:()=>e(t()==="fruit"?"starwars":"fruit")})}n.code=`import {createSignal} from "solid-js";
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
