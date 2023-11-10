import{c as e,m as g,D as p,b as C,g as s,a,i as c,t as d}from"./entry-client-fa648c77.js";import"./index-5be97176.js";import"./Theme-c9d85115.js";import"./index-a3de9b85.js";import"./index-906196f8.js";import"./index-738815bd.js";import{M as r,c as M}from"./index-fb0f364b.js";import{B as w}from"./index-ebcf5fc7.js";import"./index-a21d93e6.js";import"./index-eba976b2.js";import"./index-58fbaa55.js";import"./index-a7e4fca9.js";import"./index-9ecd4929.js";import"./index-a4a13cad.js";import"./index-2e5e112a.js";import"./index-cf2526ba.js";import"./index-5056258d.js";import"./index-519a8c4a.js";import"./index-87410e23.js";import"./index-2434b60c.js";import"./index-756cf6ab.js";import"./UnstyledLink-08d09b7e.js";import"./index-eaf0e709.js";import"./index-7e475d78.js";import"./index-47d93bee.js";import"./index-498a4fb2.js";import{B as k}from"./BadgeIcon-df147b1a.js";import"./css-6ecff688.js";import"./keyframes-f5879c2d.js";const S=({color:i="currentColor",size:n=24,children:o,...l})=>e(p,g({component:"svg"},l,{width:n,height:n,fill:i,viewBox:"0 0 24 24",get children(){return e(p,{component:"path",d:"M11 9V5L18 12L11 19V14.9C6 14.9 2.5 16.5 0 20C1 15 4 10 11 9M17 8V5L24 12L17 19V16L21 12L17 8Z"})}})),x=d("<span>Second Item"),D=d("<div><!$><!/><!$><!/>");function $(){const[i,n]=C(!1);return(()=>{const o=s(D),l=o.firstChild,[m,u]=a(l.nextSibling),f=m.nextSibling,[I,h]=a(f.nextSibling);return c(o,e(w,{onClick:()=>n(t=>!t),children:"Clickable Dropdown"}),m,u),c(o,e(M,{onCloseRequest:()=>n(!1),isVisible:i,get children(){return[e(r,{onClick:()=>n(!1),children:"Hello World"}),e(r,{onClick:()=>n(!1),children:"First Item"}),e(r,{onClick:()=>n(!1),get children(){return[e(S,{}),(()=>{const t=s(x);return t.style.setProperty("flex","1"),t})(),e(k,{})]}}),e(r,{children:"Doesn't Close"})]}}),I,h),o})()}$.code=`import {Button} from "@qinetik/anique";
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
