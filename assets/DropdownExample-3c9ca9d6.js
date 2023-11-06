import{c as e,m as g,D as p,b as C,g as s,a,i as c,t as d}from"./entry-client-23914c21.js";import"./index-6427a2f6.js";import"./Theme-c9d85115.js";import"./index-096f9d8e.js";import"./index-d1661098.js";import"./index-55909f5f.js";import{M as r,D as M}from"./index-58ae8ba7.js";import{B as w}from"./index-99dc85aa.js";import"./index-70649c9c.js";import"./index-0715b131.js";import"./index-05916829.js";import"./index-c124aee2.js";import"./index-1740d0a2.js";import"./index-1cfc4eeb.js";import"./index-9fac0c6a.js";import"./index-7e2460ae.js";import"./index-4d1252b9.js";import"./index-a2a937ad.js";import"./index-4b012459.js";import"./index-e59065e4.js";import"./index-c19d27c0.js";import"./UnstyledLink-395be662.js";import"./index-54c0212b.js";import"./index-3fa64ce4.js";import"./index-075dc7a0.js";import{B as k}from"./BadgeIcon-fecea599.js";import"./css-26601209.js";import"./keyframes-59a403a9.js";const S=({color:i="currentColor",size:n=24,children:o,...l})=>e(p,g({component:"svg"},l,{width:n,height:n,fill:i,viewBox:"0 0 24 24",get children(){return e(p,{component:"path",d:"M11 9V5L18 12L11 19V14.9C6 14.9 2.5 16.5 0 20C1 15 4 10 11 9M17 8V5L24 12L17 19V16L21 12L17 8Z"})}})),D=d("<span>Second Item"),x=d("<div><!$><!/><!$><!/>");function $(){const[i,n]=C(!1);return(()=>{const o=s(x),l=o.firstChild,[m,u]=a(l.nextSibling),f=m.nextSibling,[I,h]=a(f.nextSibling);return c(o,e(w,{onClick:()=>n(t=>!t),children:"Clickable Dropdown"}),m,u),c(o,e(M,{onCloseRequest:()=>n(!1),isVisible:i,get children(){return[e(r,{onClick:()=>n(!1),children:"Hello World"}),e(r,{onClick:()=>n(!1),children:"First Item"}),e(r,{onClick:()=>n(!1),get children(){return[e(S,{}),(()=>{const t=s(D);return t.style.setProperty("flex","1"),t})(),e(k,{})]}}),e(r,{children:"Doesn't Close"})]}}),I,h),o})()}$.code=`import {Button} from "@qinetik/anique";
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
