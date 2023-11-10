import{b as l,c as e,g as O,a as r,i as s,t as C}from"./entry-client-f8a4ae77.js";import"./index-1349e2ee.js";import"./Theme-c9d85115.js";import"./index-9faa6ccb.js";import"./index-e26dcbaa.js";import"./index-c7e055fe.js";import{D as M,M as p,b as k}from"./index-c2ccd6b4.js";import{B as a}from"./index-950dbaca.js";import"./index-790f0904.js";import"./index-459eedf5.js";import"./index-5487e511.js";import"./index-69169d02.js";import"./index-2ccff704.js";import"./index-87c6ec70.js";import"./index-3bfb6c94.js";import"./index-02608a48.js";import"./index-57c7de99.js";import"./index-64764018.js";import"./index-04f85821.js";import"./index-85412099.js";import"./index-cbf5d0c2.js";import"./UnstyledLink-d0c164d4.js";import"./index-b8dd5fd3.js";import"./index-6f1cfc45.js";import"./index-a8521333.js";import"./css-37145586.js";import"./keyframes-5ac2df48.js";const $=C("<div><!$><!/><!$><!/>");function b(){const[m,o]=l(!1),[u,t]=l(!1);return[e(a,{onClick:()=>o(!0),children:"Open Dialog"}),e(k,{title:"Dialog Title",isVisible:m,onCloseRequest:()=>o(!1),get content(){return(()=>{const n=O($),c=n.firstChild,[i,g]=r(c.nextSibling),d=i.nextSibling,[f,D]=r(d.nextSibling);return n.style.setProperty("position","relative"),s(n,e(a,{onClick:()=>t(!0),children:"Open Menu"}),i,g),s(n,e(M,{onCloseRequest:()=>t(!1),isVisible:u,get children(){return[e(p,{onClick:()=>t(!1),children:"Hello World"}),e(p,{onClick:()=>t(!1),children:"Doesn't Close"})]}}),f,D),n})()}})]}b.code=`import {createSignal} from "solid-js";
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
                            <MenuItem onClick={() => setOpen(false)}>Doesn't Close</MenuItem>
                        </DropdownMenu>
                    </div>
                }
            />
        </>
    )
}`;export{b as default};
