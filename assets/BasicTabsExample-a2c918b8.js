import{b as f,c as e,g,a as o,i,S as l,t as C}from"./entry-client-e7f04580.js";import"./index-326c8233.js";import"./Theme-c9d85115.js";import"./index-505673d9.js";import"./index-99f4859e.js";import"./index-c9b3d057.js";import{T as w,f as c}from"./index-7a72bcca.js";import"./index-ce1ffc42.js";import"./index-4460cad9.js";import{C as T}from"./index-7c3e3388.js";import"./index-26e5468d.js";import"./index-5dd4f3c1.js";import"./index-713cd9c3.js";import"./index-5e9d9ab7.js";import"./index-6e455505.js";import"./index-4b92b0d7.js";import"./index-f5b55317.js";import"./index-395e79e9.js";import"./index-8515abcf.js";import"./index-1a03f1e0.js";import"./index-38ea9e49.js";import"./UnstyledLink-3a662916.js";import"./index-6e8c2b16.js";import"./index-744ba056.js";import"./index-eb07a99c.js";import"./css-9de456a1.js";import"./keyframes-f88073d5.js";const $=C("<span><!$><!/><!$><!/><!$><!/>");function x(){const[t,r]=f(0);return e(T,{get children(){return[e(w,{get children(){return[e(c,{get isSelected(){return t()===0},onClick:()=>r(0),children:"First"}),e(c,{get isSelected(){return t()===1},onClick:()=>r(1),children:"Second"}),e(c,{get isSelected(){return t()===2},onClick:()=>r(2),children:"Third"})]}}),(()=>{const n=g($),m=n.firstChild,[s,d]=o(m.nextSibling),p=s.nextSibling,[a,S]=o(p.nextSibling),h=a.nextSibling,[b,u]=o(h.nextSibling);return i(n,e(l,{get when(){return t()==0},children:"Content for first"}),s,d),i(n,e(l,{get when(){return t()==1},children:"Content for second"}),a,S),i(n,e(l,{get when(){return t()==2},children:"Content for third"}),b,u),n})()]}})}x.code=`import {Column} from "@qinetik/anique";
import {Tab, TabRow} from "@qinetik/anique/tab";
import {createSignal, Show} from "solid-js";

export default function BasicTabsExample() {

    const [selected, setSelected] = createSignal(0)

    return (
        <Column>
            <TabRow>
                <Tab isSelected={selected() === 0} onClick={() => setSelected(0)}>First</Tab>
                <Tab isSelected={selected() === 1} onClick={() => setSelected(1)}>Second</Tab>
                <Tab isSelected={selected() === 2} onClick={() => setSelected(2)}>Third</Tab>
            </TabRow>
            <span>
                <Show when={selected() == 0}>
                    Content for first
                </Show>
                <Show when={selected() == 1}>
                    Content for second
                </Show>
                <Show when={selected() == 2}>
                    Content for third
                </Show>
            </span>
        </Column>
    )
}`;export{x as default};
