import{b as f,c as e,g,a as o,i,S as l,t as C}from"./entry-client-efb8f723.js";import"./index-e694302e.js";import"./Theme-c9d85115.js";import"./index-149a8a7e.js";import"./index-299bfccf.js";import"./index-b09005ba.js";import{T as w,i as c}from"./index-14c4e9b6.js";import"./index-01de8884.js";import{C as T}from"./index-d49a5ec8.js";import"./index-5b708f90.js";import"./index-1bac3de3.js";import"./index-0af3ff77.js";import"./index-74c14fc3.js";import"./index-2f6b9236.js";import"./index-ceddf797.js";import"./index-fc4b21a7.js";import"./index-38fd54ad.js";import"./index-18364d7e.js";import"./index-058de43f.js";import"./index-b793009e.js";import"./UL-596ed081.js";import"./index-a48d6eab.js";import"./index-0c52bc5d.js";import"./index-fb659094.js";import"./css-7a3f4315.js";import"./keyframes-17273c02.js";const $=C("<span><!$><!/><!$><!/><!$><!/>");function x(){const[t,r]=f(0);return e(T,{get children(){return[e(w,{get children(){return[e(c,{get isSelected(){return t()===0},onClick:()=>r(0),children:"First"}),e(c,{get isSelected(){return t()===1},onClick:()=>r(1),children:"Second"}),e(c,{get isSelected(){return t()===2},onClick:()=>r(2),children:"Third"})]}}),(()=>{const n=g($),m=n.firstChild,[s,d]=o(m.nextSibling),p=s.nextSibling,[a,S]=o(p.nextSibling),h=a.nextSibling,[b,u]=o(h.nextSibling);return i(n,e(l,{get when(){return t()==0},children:"Content for first"}),s,d),i(n,e(l,{get when(){return t()==1},children:"Content for second"}),a,S),i(n,e(l,{get when(){return t()==2},children:"Content for third"}),b,u),n})()]}})}x.code=`import {Column} from "@qinetik/anique";
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
