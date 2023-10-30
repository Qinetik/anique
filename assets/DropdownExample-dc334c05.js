import{b as f,g as h,a as i,i as l,c as e,S as I,t as M}from"./entry-client-a96cbc4d.js";import"./index-755bc77f.js";import"./Theme-c9d85115.js";import"./index-9b146908.js";import"./index-0f3f083d.js";import"./index-41256d2f.js";import{f as k,M as o}from"./index-b3c017de.js";import{B as w}from"./index-fe490c73.js";import"./index-df837084.js";import"./index-0b90490a.js";import"./index-1fc8dcd4.js";import"./index-2ede3e13.js";import"./index-1573e59b.js";import"./index-6baed7d3.js";import"./index-69f01235.js";import"./index-b49aba21.js";import"./index-d2d6e189.js";import"./index-8ce3d155.js";import"./index-ffe50960.js";import"./index-2f2b9ad8.js";import"./UL-412bb8d8.js";import"./index-0e33e01a.js";import"./index-3bdeeb8b.js";import"./index-e3dc129e.js";import"./css-884efc55.js";import"./keyframes-bd3d6767.js";const C=M("<div><!$><!/><!$><!/>");function S(){const[m,n]=f(!1);return(()=>{const t=h(C),p=t.firstChild,[r,a]=i(p.nextSibling),s=r.nextSibling,[c,d]=i(s.nextSibling);return l(t,e(w,{onClick:()=>n(u=>!u),children:"Clickable Dropdown"}),r,a),l(t,e(I,{get when(){return m()},get children(){return e(k,{get children(){return[e(o,{onClick:()=>n(!1),children:"Hello World"}),e(o,{onClick:()=>n(!1),children:"First Item"}),e(o,{onClick:()=>n(!1),children:"Second Item"}),e(o,{onClick:()=>n(!1),children:"Third Item"})]}})}}),c,d),t})()}S.code=`import {Button} from "@qinetik/anique";
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
