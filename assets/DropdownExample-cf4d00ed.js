import{c as e,m as g,D as p,b as C,g as s,a,i as c,t as d}from"./entry-client-f8a4ae77.js";import"./index-1349e2ee.js";import"./Theme-c9d85115.js";import"./index-9faa6ccb.js";import"./index-e26dcbaa.js";import"./index-c7e055fe.js";import{M as r,D as M}from"./index-c2ccd6b4.js";import{B as w}from"./index-950dbaca.js";import"./index-790f0904.js";import"./index-459eedf5.js";import"./index-5487e511.js";import"./index-69169d02.js";import"./index-2ccff704.js";import"./index-87c6ec70.js";import"./index-3bfb6c94.js";import"./index-02608a48.js";import"./index-57c7de99.js";import"./index-64764018.js";import"./index-04f85821.js";import"./index-85412099.js";import"./index-cbf5d0c2.js";import"./UnstyledLink-d0c164d4.js";import"./index-b8dd5fd3.js";import"./index-6f1cfc45.js";import"./index-a8521333.js";import{B as k}from"./BadgeIcon-d6989a7b.js";import"./css-37145586.js";import"./keyframes-5ac2df48.js";const S=({color:i="currentColor",size:n=24,children:o,...l})=>e(p,g({component:"svg"},l,{width:n,height:n,fill:i,viewBox:"0 0 24 24",get children(){return e(p,{component:"path",d:"M11 9V5L18 12L11 19V14.9C6 14.9 2.5 16.5 0 20C1 15 4 10 11 9M17 8V5L24 12L17 19V16L21 12L17 8Z"})}})),D=d("<span>Second Item"),x=d("<div><!$><!/><!$><!/>");function $(){const[i,n]=C(!1);return(()=>{const o=s(x),l=o.firstChild,[m,u]=a(l.nextSibling),f=m.nextSibling,[I,h]=a(f.nextSibling);return c(o,e(w,{onClick:()=>n(t=>!t),children:"Clickable Dropdown"}),m,u),c(o,e(M,{onCloseRequest:()=>n(!1),isVisible:i,get children(){return[e(r,{onClick:()=>n(!1),children:"Hello World"}),e(r,{onClick:()=>n(!1),children:"First Item"}),e(r,{onClick:()=>n(!1),get children(){return[e(S,{}),(()=>{const t=s(D);return t.style.setProperty("flex","1"),t})(),e(k,{})]}}),e(r,{children:"Doesn't Close"})]}}),I,h),o})()}$.code=`import {Button} from "@qinetik/anique";
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
