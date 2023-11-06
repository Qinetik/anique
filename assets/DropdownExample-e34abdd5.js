import{b as C,g as s,a,i as c,c as n,t as d}from"./entry-client-b1cdb755.js";import"./index-123f5b0d.js";import"./Theme-c9d85115.js";import"./index-8e5bd437.js";import"./index-b3b79d55.js";import"./index-9819aab5.js";import{M as i,D as g}from"./index-8f15c368.js";import{B as M}from"./index-69b2c138.js";import"./index-072e3436.js";import"./index-6bcccf20.js";import"./index-b9566db1.js";import"./index-023d75c5.js";import"./index-2758a2ec.js";import"./index-70c7726a.js";import"./index-11fb7b74.js";import"./index-f7f81b39.js";import"./index-fe3b8c3b.js";import"./index-2c8603ad.js";import"./index-15598541.js";import"./index-0be5e0ec.js";import"./index-a1f40fe4.js";import"./UnstyledLink-f3bad3fa.js";import"./index-f148c6eb.js";import"./index-96651276.js";import"./index-01a819b4.js";import{B as w}from"./BadgeIcon-3005168e.js";import{g as S}from"./_commonjsHelpers-de833af9.js";import{r as k}from"./web-0a439558.js";import"./css-b493a813.js";import"./keyframes-e9a77a12.js";var t=k;const $=({color:l="currentColor",size:e=24,children:o,...m})=>t.createComponent(t.Dynamic,t.mergeProps({component:"svg"},m,{width:e,height:e,fill:l,viewBox:"0 0 24 24",get children(){return t.createComponent(t.Dynamic,{component:"path",d:"M11 9V5L18 12L11 19V14.9C6 14.9 2.5 16.5 0 20C1 15 4 10 11 9M17 8V5L24 12L17 19V16L21 12L17 8Z"})}}));var D=$;const x=S(D),B=d("<span>Second Item"),_=d("<div><!$><!/><!$><!/>");function b(){const[l,e]=C(!1);return(()=>{const o=s(_),m=o.firstChild,[p,u]=a(m.nextSibling),f=p.nextSibling,[I,h]=a(f.nextSibling);return c(o,n(M,{onClick:()=>e(r=>!r),children:"Clickable Dropdown"}),p,u),c(o,n(g,{onCloseRequest:()=>e(!1),isVisible:l,get children(){return[n(i,{onClick:()=>e(!1),children:"Hello World"}),n(i,{onClick:()=>e(!1),children:"First Item"}),n(i,{onClick:()=>e(!1),get children(){return[n(x,{}),(()=>{const r=s(B);return r.style.setProperty("flex","1"),r})(),n(w,{})]}}),n(i,{children:"Doesn't Close"})]}}),I,h),o})()}b.code=`import {Button} from "@qinetik/anique";
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
}`;export{b as default};
