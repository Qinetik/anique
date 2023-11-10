import{b as l,c as e,g as C,a as r,i as p,t as O}from"./entry-client-fa648c77.js";import"./index-5be97176.js";import"./Theme-c9d85115.js";import"./index-a3de9b85.js";import"./index-906196f8.js";import"./index-738815bd.js";import{c as M,M as s,b as k}from"./index-fb0f364b.js";import{B as a}from"./index-ebcf5fc7.js";import"./index-a21d93e6.js";import"./index-eba976b2.js";import"./index-58fbaa55.js";import"./index-a7e4fca9.js";import"./index-9ecd4929.js";import"./index-a4a13cad.js";import"./index-2e5e112a.js";import"./index-cf2526ba.js";import"./index-5056258d.js";import"./index-519a8c4a.js";import"./index-87410e23.js";import"./index-2434b60c.js";import"./index-756cf6ab.js";import"./UnstyledLink-08d09b7e.js";import"./index-eaf0e709.js";import"./index-7e475d78.js";import"./index-47d93bee.js";import"./index-498a4fb2.js";import"./css-6ecff688.js";import"./keyframes-f5879c2d.js";const $=O("<div><!$><!/><!$><!/>");function b(){const[m,o]=l(!1),[u,n]=l(!1);return[e(a,{onClick:()=>o(!0),children:"Open Dialog"}),e(k,{title:"Dialog Title",isVisible:m,onCloseRequest:()=>o(!1),get content(){return(()=>{const t=C($),c=t.firstChild,[i,g]=r(c.nextSibling),d=i.nextSibling,[D,f]=r(d.nextSibling);return t.style.setProperty("position","relative"),p(t,e(a,{onClick:()=>n(!0),children:"Open Menu"}),i,g),p(t,e(M,{onCloseRequest:()=>n(!1),isVisible:u,get children(){return[e(s,{onClick:()=>n(!1),children:"Hello World"}),e(s,{onClick:()=>{},children:"Doesn't Close"})]}}),D,f),t})()}})]}b.code=`import {createSignal} from "solid-js";
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
