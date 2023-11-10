import{b as l,c as e,g as C,a as r,i as p,t as O}from"./entry-client-c6070623.js";import"./index-108c4257.js";import"./Theme-c9d85115.js";import"./index-923cd83d.js";import"./index-ebb683f1.js";import"./index-222b9f4a.js";import{c as M,M as s,b as k}from"./index-22b1ace7.js";import{B as a}from"./index-66667bdf.js";import"./index-eeee74a7.js";import"./index-c98928aa.js";import"./index-6082ff86.js";import"./index-8335c2a4.js";import"./index-b1181c6a.js";import"./index-6856f9e6.js";import"./index-abcb63f9.js";import"./index-1b661b3f.js";import"./index-0ebd6ae5.js";import"./index-f5fca8e5.js";import"./index-0b681d21.js";import"./index-2a05b8f3.js";import"./index-aae78141.js";import"./UnstyledLink-0663e860.js";import"./index-01205ea4.js";import"./index-05974638.js";import"./index-6a98188b.js";import"./index-12602de8.js";import"./css-c6273b18.js";import"./keyframes-2d272afe.js";const $=O("<div><!$><!/><!$><!/>");function b(){const[m,o]=l(!1),[u,n]=l(!1);return[e(a,{onClick:()=>o(!0),children:"Open Dialog"}),e(k,{title:"Dialog Title",isVisible:m,onCloseRequest:()=>o(!1),get content(){return(()=>{const t=C($),c=t.firstChild,[i,g]=r(c.nextSibling),d=i.nextSibling,[D,f]=r(d.nextSibling);return t.style.setProperty("position","relative"),p(t,e(a,{onClick:()=>n(!0),children:"Open Menu"}),i,g),p(t,e(M,{onCloseRequest:()=>n(!1),isVisible:u,get children(){return[e(s,{onClick:()=>n(!1),children:"Hello World"}),e(s,{onClick:()=>{},children:"Doesn't Close"})]}}),D,f),t})()}})]}b.code=`import {createSignal} from "solid-js";
import {AlertDialog, Button, DropdownMenu, MenuItem} from "@qinetik/anique";

export default function DropdownDialogExample() {
    const [dialogOpen, setDialogOpen] = createSignal(false)
    const [open, setOpen] = createSignal(false);
    return (
        <>
            <Button onClick={() => setDialogOpen(true)}>Open Dialog</Button>
            <AlertDialog
                title={"Dialog Title"}
                isVisible={dialogOpen}
                onCloseRequest={() => setDialogOpen(false)}
                content={
                    <div style={{position: 'relative'}}>
                        <Button onClick={() => setOpen(true)}>Open Menu</Button>
                        <DropdownMenu
                            onCloseRequest={() => setOpen(false)}
                            isVisible={open}
                        >
                            <MenuItem onClick={() => setOpen(false)}>Hello World</MenuItem>
                            <MenuItem onClick={() => {}}>Doesn't Close</MenuItem>
                        </DropdownMenu>
                    </div>
                }
            />
        </>
    )
}`;export{b as default};
