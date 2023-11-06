import{B as r}from"./index-ce1ffc42.js";import{c as s}from"./index-7a72bcca.js";import{b as a,c as n,f as e}from"./entry-client-e7f04580.js";import{s as p}from"./index-326c8233.js";import{A as m}from"./Theme-c9d85115.js";import"./index-505673d9.js";import"./index-99f4859e.js";import"./index-c9b3d057.js";import"./index-4460cad9.js";import"./index-7c3e3388.js";import"./index-26e5468d.js";import"./index-5dd4f3c1.js";import"./index-713cd9c3.js";import"./index-5e9d9ab7.js";import"./index-6e455505.js";import"./index-4b92b0d7.js";import"./index-f5b55317.js";import"./index-395e79e9.js";import"./index-8515abcf.js";import"./index-1a03f1e0.js";import"./index-38ea9e49.js";import"./UnstyledLink-3a662916.js";import"./index-6e8c2b16.js";import"./index-744ba056.js";import"./index-eb07a99c.js";import"./css-9de456a1.js";import"./keyframes-f88073d5.js";const l=p("div")`
    border-radius: 1em;
    background: ${m.colors.bg400};
    box-sizing: border-box;
    padding: 2em;
    position: absolute;
`;function d(){const[o,t]=a(!1);return[n(r,{onClick:i=>t(!o()),children:"Open Dialog"}),e((()=>{const i=e(()=>!!o());return()=>i()?n(s,{onCloseRequest:()=>t(!1),isVisible:o,get children(){return n(l,{children:"This is a centered dialog"})}}):null})())]}d.code=`import {Button} from "@qinetik/anique/button";
import {Dialog} from "@qinetik/anique/dialog";
import {createSignal} from "solid-js";
import {Anique} from "@qinetik/anique";
import {styled} from "@qinetik/emotion";

const DialogContent = styled("div")\`
    border-radius: 1em;
    background: \${Anique.colors.bg400};
    box-sizing: border-box;
    padding: 2em;
    position: absolute;
\`

export default function CenteredDialogExample() {
    const [is1stOpen, setIs1stOpen] = createSignal(false)
    return (
        <>
            <Button onClick={(e) => setIs1stOpen(!is1stOpen())}>Open Dialog</Button>
            {is1stOpen() ? (
                <Dialog
                    onCloseRequest={() => setIs1stOpen(false)}
                    isVisible={is1stOpen}
                >
                    <DialogContent>
                        This is a centered dialog
                    </DialogContent>
                </Dialog>
            ) : null}
        </>
    )
}`;export{d as default};
