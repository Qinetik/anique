import{b as f,g as C,a as r,i as l,c as e,t as M}from"./entry-client-3af6d313.js";import"./index-94caafb4.js";import"./Theme-c9d85115.js";import"./index-bab6a310.js";import"./index-c5bef6b0.js";import"./index-cfa94871.js";import{M as t,f as w}from"./index-1830aefe.js";import{B as I}from"./index-6d8184a4.js";import"./index-f6f07d1f.js";import"./index-c4ee8099.js";import"./index-9d7cf436.js";import"./index-67eb7d25.js";import"./index-98966c2c.js";import"./index-5ba1b5d6.js";import"./index-51d3af24.js";import"./index-f7946e34.js";import"./index-68b47e9b.js";import"./index-7ed7999b.js";import"./index-7355db2b.js";import"./index-e32cadde.js";import"./UL-e6a4a899.js";import"./index-760a4f67.js";import"./index-24296090.js";import"./index-1bde3f1a.js";import"./css-e90cefea.js";import"./keyframes-6d33a2dc.js";const k=M("<div><!$><!/><!$><!/>");function h(){const[m,n]=f(!1);return(()=>{const o=C(k),p=o.firstChild,[i,s]=r(p.nextSibling),a=i.nextSibling,[c,u]=r(a.nextSibling);return l(o,e(I,{onClick:()=>n(d=>!d),children:"Clickable Dropdown"}),i,s),l(o,e(w,{onCloseRequest:()=>n(!1),isVisible:m,get children(){return[e(t,{onClick:()=>n(!1),children:"Hello World"}),e(t,{onClick:()=>n(!1),children:"First Item"}),e(t,{onClick:()=>n(!1),children:"Second Item"}),e(t,{children:"Doesn't Close"})]}}),c,u),o})()}h.code=`import {Button} from "@qinetik/anique";
import {createSignal} from "solid-js";
import {DropdownMenu, MenuItem} from "@qinetik/anique/dropdown";

export default function DropdownExample() {
    const [open, setOpen] = createSignal(false)
    return (
        <div>
            <Button onClick={() => setOpen((o) => !o)}>Clickable Dropdown</Button>
            {/*<Show when={open()}> use show if don't want it to mount*/}
            <DropdownMenu onCloseRequest={() => setOpen(false)} isVisible={open}>
                <MenuItem onClick={() => setOpen(false)}>Hello World</MenuItem>
                <MenuItem onClick={() => setOpen(false)}>First Item</MenuItem>
                <MenuItem onClick={() => setOpen(false)}>Second Item</MenuItem>
                <MenuItem>Doesn't Close</MenuItem>
            </DropdownMenu>
            {/*</Show>*/}
        </div>
    )
}`;export{h as default};
