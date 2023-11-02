import{b as f,g as C,a as r,i as l,c as e,t as M}from"./entry-client-efb8f723.js";import"./index-e694302e.js";import"./Theme-c9d85115.js";import"./index-149a8a7e.js";import"./index-299bfccf.js";import"./index-b09005ba.js";import{M as t,f as w}from"./index-14c4e9b6.js";import{B as I}from"./index-01de8884.js";import"./index-d49a5ec8.js";import"./index-5b708f90.js";import"./index-1bac3de3.js";import"./index-0af3ff77.js";import"./index-74c14fc3.js";import"./index-2f6b9236.js";import"./index-ceddf797.js";import"./index-fc4b21a7.js";import"./index-38fd54ad.js";import"./index-18364d7e.js";import"./index-058de43f.js";import"./index-b793009e.js";import"./UL-596ed081.js";import"./index-a48d6eab.js";import"./index-0c52bc5d.js";import"./index-fb659094.js";import"./css-7a3f4315.js";import"./keyframes-17273c02.js";const k=M("<div><!$><!/><!$><!/>");function h(){const[m,n]=f(!1);return(()=>{const o=C(k),p=o.firstChild,[i,s]=r(p.nextSibling),a=i.nextSibling,[c,u]=r(a.nextSibling);return l(o,e(I,{onClick:()=>n(d=>!d),children:"Clickable Dropdown"}),i,s),l(o,e(w,{onCloseRequest:()=>n(!1),isVisible:m,get children(){return[e(t,{onClick:()=>n(!1),children:"Hello World"}),e(t,{onClick:()=>n(!1),children:"First Item"}),e(t,{onClick:()=>n(!1),children:"Second Item"}),e(t,{children:"Doesn't Close"})]}}),c,u),o})()}h.code=`import {Button} from "@qinetik/anique";
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
