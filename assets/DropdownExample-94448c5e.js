import{c as e,m as g,D as p,b as C,g as s,a,i as c,t as d}from"./entry-client-c6070623.js";import"./index-108c4257.js";import"./Theme-c9d85115.js";import"./index-923cd83d.js";import"./index-ebb683f1.js";import"./index-222b9f4a.js";import{M as r,c as M}from"./index-22b1ace7.js";import{B as w}from"./index-66667bdf.js";import"./index-eeee74a7.js";import"./index-c98928aa.js";import"./index-6082ff86.js";import"./index-8335c2a4.js";import"./index-b1181c6a.js";import"./index-6856f9e6.js";import"./index-abcb63f9.js";import"./index-1b661b3f.js";import"./index-0ebd6ae5.js";import"./index-f5fca8e5.js";import"./index-0b681d21.js";import"./index-2a05b8f3.js";import"./index-aae78141.js";import"./UnstyledLink-0663e860.js";import"./index-01205ea4.js";import"./index-05974638.js";import"./index-6a98188b.js";import"./index-12602de8.js";import{B as k}from"./BadgeIcon-ce72a83d.js";import"./css-c6273b18.js";import"./keyframes-2d272afe.js";const S=({color:i="currentColor",size:n=24,children:o,...l})=>e(p,g({component:"svg"},l,{width:n,height:n,fill:i,viewBox:"0 0 24 24",get children(){return e(p,{component:"path",d:"M11 9V5L18 12L11 19V14.9C6 14.9 2.5 16.5 0 20C1 15 4 10 11 9M17 8V5L24 12L17 19V16L21 12L17 8Z"})}})),x=d("<span>Second Item"),D=d("<div><!$><!/><!$><!/>");function $(){const[i,n]=C(!1);return(()=>{const o=s(D),l=o.firstChild,[m,u]=a(l.nextSibling),f=m.nextSibling,[I,h]=a(f.nextSibling);return c(o,e(w,{onClick:()=>n(t=>!t),children:"Clickable Dropdown"}),m,u),c(o,e(M,{onCloseRequest:()=>n(!1),isVisible:i,get children(){return[e(r,{onClick:()=>n(!1),children:"Hello World"}),e(r,{onClick:()=>n(!1),children:"First Item"}),e(r,{onClick:()=>n(!1),get children(){return[e(S,{}),(()=>{const t=s(x);return t.style.setProperty("flex","1"),t})(),e(k,{})]}}),e(r,{children:"Doesn't Close"})]}}),I,h),o})()}$.code=`import {Button} from "@qinetik/anique";
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
