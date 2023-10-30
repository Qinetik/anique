import{b as f,c as e,g,a as o,i,S as l,t as C}from"./entry-client-2fda6d46.js";import"./index-bb5a5d3d.js";import"./Theme-c9d85115.js";import"./index-50dde1b3.js";import"./index-d65ca23f.js";import"./index-880dcc90.js";import{T as w,i as c}from"./index-8c496293.js";import"./index-7a43a4af.js";import{C as T}from"./index-e7aa7392.js";import"./index-f62fd80e.js";import"./index-d1f62f4a.js";import"./index-710de314.js";import"./index-a88f9566.js";import"./index-b47d8711.js";import"./index-78db38af.js";import"./index-7a2b10b5.js";import"./index-57b39e9e.js";import"./index-04a91ab9.js";import"./index-31fb525c.js";import"./index-f6060dd8.js";import"./UL-a265d12a.js";import"./index-11ea25b9.js";import"./index-d7a2bb4c.js";import"./index-927437be.js";import"./css-a2b805a8.js";import"./keyframes-489867ef.js";const $=C("<span><!$><!/><!$><!/><!$><!/>");function x(){const[t,r]=f(0);return e(T,{get children(){return[e(w,{get children(){return[e(c,{get isSelected(){return t()===0},onClick:()=>r(0),children:"First"}),e(c,{get isSelected(){return t()===1},onClick:()=>r(1),children:"Second"}),e(c,{get isSelected(){return t()===2},onClick:()=>r(2),children:"Third"})]}}),(()=>{const n=g($),m=n.firstChild,[s,d]=o(m.nextSibling),p=s.nextSibling,[a,S]=o(p.nextSibling),h=a.nextSibling,[b,u]=o(h.nextSibling);return i(n,e(l,{get when(){return t()==0},children:"Content for first"}),s,d),i(n,e(l,{get when(){return t()==1},children:"Content for second"}),a,S),i(n,e(l,{get when(){return t()==2},children:"Content for third"}),b,u),n})()]}})}x.code=`import {Column} from "@qinetik/anique";
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
