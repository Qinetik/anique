import{b as f,c as e,g,a as o,i,S as l,t as C}from"./entry-client-a96cbc4d.js";import"./index-755bc77f.js";import"./Theme-c9d85115.js";import"./index-9b146908.js";import"./index-0f3f083d.js";import"./index-41256d2f.js";import{T as w,i as c}from"./index-b3c017de.js";import"./index-fe490c73.js";import{C as T}from"./index-df837084.js";import"./index-0b90490a.js";import"./index-1fc8dcd4.js";import"./index-2ede3e13.js";import"./index-1573e59b.js";import"./index-6baed7d3.js";import"./index-69f01235.js";import"./index-b49aba21.js";import"./index-d2d6e189.js";import"./index-8ce3d155.js";import"./index-ffe50960.js";import"./index-2f2b9ad8.js";import"./UL-412bb8d8.js";import"./index-0e33e01a.js";import"./index-3bdeeb8b.js";import"./index-e3dc129e.js";import"./css-884efc55.js";import"./keyframes-bd3d6767.js";const $=C("<span><!$><!/><!$><!/><!$><!/>");function x(){const[t,r]=f(0);return e(T,{get children(){return[e(w,{get children(){return[e(c,{get isSelected(){return t()===0},onClick:()=>r(0),children:"First"}),e(c,{get isSelected(){return t()===1},onClick:()=>r(1),children:"Second"}),e(c,{get isSelected(){return t()===2},onClick:()=>r(2),children:"Third"})]}}),(()=>{const n=g($),m=n.firstChild,[s,d]=o(m.nextSibling),p=s.nextSibling,[a,S]=o(p.nextSibling),h=a.nextSibling,[b,u]=o(h.nextSibling);return i(n,e(l,{get when(){return t()==0},children:"Content for first"}),s,d),i(n,e(l,{get when(){return t()==1},children:"Content for second"}),a,S),i(n,e(l,{get when(){return t()==2},children:"Content for third"}),b,u),n})()]}})}x.code=`import {Column} from "@qinetik/anique";
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
