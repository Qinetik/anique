import{c as e,m as g,D as p,b as C,g as s,a,i as c,t as d}from"./entry-client-e7f04580.js";import"./index-326c8233.js";import"./Theme-c9d85115.js";import"./index-505673d9.js";import"./index-99f4859e.js";import"./index-c9b3d057.js";import{M as r,D as M}from"./index-7a72bcca.js";import{B as w}from"./index-ce1ffc42.js";import"./index-4460cad9.js";import"./index-7c3e3388.js";import"./index-26e5468d.js";import"./index-5dd4f3c1.js";import"./index-713cd9c3.js";import"./index-5e9d9ab7.js";import"./index-6e455505.js";import"./index-4b92b0d7.js";import"./index-f5b55317.js";import"./index-395e79e9.js";import"./index-8515abcf.js";import"./index-1a03f1e0.js";import"./index-38ea9e49.js";import"./UnstyledLink-3a662916.js";import"./index-6e8c2b16.js";import"./index-744ba056.js";import"./index-eb07a99c.js";import{B as k}from"./BadgeIcon-4848d80e.js";import"./css-9de456a1.js";import"./keyframes-f88073d5.js";const S=({color:i="currentColor",size:n=24,children:o,...l})=>e(p,g({component:"svg"},l,{width:n,height:n,fill:i,viewBox:"0 0 24 24",get children(){return e(p,{component:"path",d:"M11 9V5L18 12L11 19V14.9C6 14.9 2.5 16.5 0 20C1 15 4 10 11 9M17 8V5L24 12L17 19V16L21 12L17 8Z"})}})),D=d("<span>Second Item"),x=d("<div><!$><!/><!$><!/>");function $(){const[i,n]=C(!1);return(()=>{const o=s(x),l=o.firstChild,[m,u]=a(l.nextSibling),f=m.nextSibling,[I,h]=a(f.nextSibling);return c(o,e(w,{onClick:()=>n(t=>!t),children:"Clickable Dropdown"}),m,u),c(o,e(M,{onCloseRequest:()=>n(!1),isVisible:i,get children(){return[e(r,{onClick:()=>n(!1),children:"Hello World"}),e(r,{onClick:()=>n(!1),children:"First Item"}),e(r,{onClick:()=>n(!1),get children(){return[e(S,{}),(()=>{const t=s(D);return t.style.setProperty("flex","1"),t})(),e(k,{})]}}),e(r,{children:"Doesn't Close"})]}}),I,h),o})()}$.code=`import {Button} from "@qinetik/anique";
import {createSignal} from "solid-js";
import {DropdownMenu, MenuItem} from "@qinetik/anique/dropdown";
import BadgeIcon from "@qinetik/mdi/BadgeIcon";
import ShareAllIcon from "@qinetik/mdi/ShareAllIcon";

export default function DropdownExample() {
    const [open, setOpen] = createSignal(false)
    return (
        <div>
            <Button onClick={() => setOpen((o) => !o)}>Clickable Dropdown</Button>
            {/*<Show when={open()}> use show if don't want it to mount*/}
            <DropdownMenu onCloseRequest={() => setOpen(false)} isVisible={open}>
                <MenuItem onClick={() => setOpen(false)}>Hello World</MenuItem>
                <MenuItem onClick={() => setOpen(false)}>First Item</MenuItem>
                <MenuItem onClick={() => setOpen(false)}>
                    <ShareAllIcon />
                    <span style={{ flex : 1 }}>Second Item</span>
                    <BadgeIcon />
                </MenuItem>
                <MenuItem>Doesn't Close</MenuItem>
            </DropdownMenu>
            {/*</Show>*/}
        </div>
    )
}`;export{$ as default};
