import{B as r}from"./index-6d8184a4.js";import{D as s}from"./index-1830aefe.js";import{b as a,c as n,f as e}from"./entry-client-3af6d313.js";import{s as p}from"./index-94caafb4.js";import{A as m}from"./Theme-c9d85115.js";import"./index-bab6a310.js";import"./index-c5bef6b0.js";import"./index-cfa94871.js";import"./index-f6f07d1f.js";import"./index-c4ee8099.js";import"./index-9d7cf436.js";import"./index-67eb7d25.js";import"./index-98966c2c.js";import"./index-5ba1b5d6.js";import"./index-51d3af24.js";import"./index-f7946e34.js";import"./index-68b47e9b.js";import"./index-7ed7999b.js";import"./index-7355db2b.js";import"./index-e32cadde.js";import"./UL-e6a4a899.js";import"./index-760a4f67.js";import"./index-24296090.js";import"./index-1bde3f1a.js";import"./css-e90cefea.js";import"./keyframes-6d33a2dc.js";const l=p("div")`
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
