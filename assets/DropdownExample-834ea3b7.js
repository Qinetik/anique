import{b as f,g as h,a as i,i as l,c as e,S as I,t as M}from"./entry-client-2ac2a0bd.js";import"./index-6df8a466.js";import"./Theme-c9d85115.js";import"./index-049cff28.js";import"./index-9f77492a.js";import"./index-5cdee6ed.js";import{f as k,M as o}from"./index-1f767762.js";import{B as w}from"./index-2e914305.js";import"./index-756d1732.js";import"./index-11ae770f.js";import"./index-7069a893.js";import"./index-046c679b.js";import"./index-b9c452d6.js";import"./index-328ce4fc.js";import"./index-5b9b80c5.js";import"./index-a7d06282.js";import"./index-7eaad697.js";import"./index-ca0b38ae.js";import"./index-0f5f71d8.js";import"./index-18f0bfa9.js";import"./UL-ae71d882.js";import"./index-2a59ccac.js";import"./index-180ab7c4.js";import"./index-cf8204f2.js";import"./css-39caad62.js";import"./keyframes-dbb20f19.js";const C=M("<div><!$><!/><!$><!/>");function S(){const[m,n]=f(!1);return(()=>{const t=h(C),p=t.firstChild,[r,a]=i(p.nextSibling),s=r.nextSibling,[c,d]=i(s.nextSibling);return l(t,e(w,{onClick:()=>n(u=>!u),children:"Clickable Dropdown"}),r,a),l(t,e(I,{get when(){return m()},get children(){return e(k,{get children(){return[e(o,{onClick:()=>n(!1),children:"Hello World"}),e(o,{onClick:()=>n(!1),children:"First Item"}),e(o,{onClick:()=>n(!1),children:"Second Item"}),e(o,{onClick:()=>n(!1),children:"Third Item"})]}})}}),c,d),t})()}S.code=`import {Button} from "@qinetik/anique";
import {createSignal, Show} from "solid-js";
import {DropdownMenu, MenuItem} from "@qinetik/anique/dropdown";

export default function DropdownExample() {
    const [open, setOpen] = createSignal(false)
    return (
        <div>
            <Button onClick={() => setOpen((o) => !o)}>Clickable Dropdown</Button>
            <Show when={open()}>
                <DropdownMenu>
                    <MenuItem onClick={() => setOpen(false)}>Hello World</MenuItem>
                    <MenuItem onClick={() => setOpen(false)}>First Item</MenuItem>
                    <MenuItem onClick={() => setOpen(false)}>Second Item</MenuItem>
                    <MenuItem onClick={() => setOpen(false)}>Third Item</MenuItem>
                </DropdownMenu>
            </Show>
        </div>
    )
}`;export{S as default};
