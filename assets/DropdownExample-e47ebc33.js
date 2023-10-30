import{b as f,g as h,a as i,i as l,c as e,S as I,t as M}from"./entry-client-2fda6d46.js";import"./index-bb5a5d3d.js";import"./Theme-c9d85115.js";import"./index-50dde1b3.js";import"./index-d65ca23f.js";import"./index-880dcc90.js";import{f as k,M as o}from"./index-8c496293.js";import{B as w}from"./index-7a43a4af.js";import"./index-e7aa7392.js";import"./index-f62fd80e.js";import"./index-d1f62f4a.js";import"./index-710de314.js";import"./index-a88f9566.js";import"./index-b47d8711.js";import"./index-78db38af.js";import"./index-7a2b10b5.js";import"./index-57b39e9e.js";import"./index-04a91ab9.js";import"./index-31fb525c.js";import"./index-f6060dd8.js";import"./UL-a265d12a.js";import"./index-11ea25b9.js";import"./index-d7a2bb4c.js";import"./index-927437be.js";import"./css-a2b805a8.js";import"./keyframes-489867ef.js";const C=M("<div><!$><!/><!$><!/>");function S(){const[m,n]=f(!1);return(()=>{const t=h(C),p=t.firstChild,[r,a]=i(p.nextSibling),s=r.nextSibling,[c,d]=i(s.nextSibling);return l(t,e(w,{onClick:()=>n(u=>!u),children:"Clickable Dropdown"}),r,a),l(t,e(I,{get when(){return m()},get children(){return e(k,{get children(){return[e(o,{onClick:()=>n(!1),children:"Hello World"}),e(o,{onClick:()=>n(!1),children:"First Item"}),e(o,{onClick:()=>n(!1),children:"Second Item"}),e(o,{onClick:()=>n(!1),children:"Third Item"})]}})}}),c,d),t})()}S.code=`import {Button} from "@qinetik/anique";
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
