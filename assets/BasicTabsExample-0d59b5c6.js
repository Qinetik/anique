import{b as f,c as e,g,a as o,i,S as l,t as C}from"./entry-client-f8a4ae77.js";import"./index-1349e2ee.js";import"./Theme-c9d85115.js";import"./index-9faa6ccb.js";import"./index-e26dcbaa.js";import"./index-c7e055fe.js";import{T as w,f as c}from"./index-c2ccd6b4.js";import"./index-950dbaca.js";import"./index-790f0904.js";import{C as T}from"./index-459eedf5.js";import"./index-5487e511.js";import"./index-69169d02.js";import"./index-2ccff704.js";import"./index-87c6ec70.js";import"./index-3bfb6c94.js";import"./index-02608a48.js";import"./index-57c7de99.js";import"./index-64764018.js";import"./index-04f85821.js";import"./index-85412099.js";import"./index-cbf5d0c2.js";import"./UnstyledLink-d0c164d4.js";import"./index-b8dd5fd3.js";import"./index-6f1cfc45.js";import"./index-a8521333.js";import"./css-37145586.js";import"./keyframes-5ac2df48.js";const $=C("<span><!$><!/><!$><!/><!$><!/>");function x(){const[t,r]=f(0);return e(T,{get children(){return[e(w,{get children(){return[e(c,{get isSelected(){return t()===0},onClick:()=>r(0),children:"First"}),e(c,{get isSelected(){return t()===1},onClick:()=>r(1),children:"Second"}),e(c,{get isSelected(){return t()===2},onClick:()=>r(2),children:"Third"})]}}),(()=>{const n=g($),m=n.firstChild,[s,d]=o(m.nextSibling),p=s.nextSibling,[a,S]=o(p.nextSibling),h=a.nextSibling,[b,u]=o(h.nextSibling);return i(n,e(l,{get when(){return t()==0},children:"Content for first"}),s,d),i(n,e(l,{get when(){return t()==1},children:"Content for second"}),a,S),i(n,e(l,{get when(){return t()==2},children:"Content for third"}),b,u),n})()]}})}x.code=`import {Column} from "@qinetik/anique";
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
