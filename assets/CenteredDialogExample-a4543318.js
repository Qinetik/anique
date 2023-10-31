import{B as r}from"./index-2e914305.js";import{D as s}from"./index-1f767762.js";import{b as a,c as n,f as e}from"./entry-client-2ac2a0bd.js";import{s as p}from"./index-6df8a466.js";import{A as m}from"./Theme-c9d85115.js";import"./index-049cff28.js";import"./index-9f77492a.js";import"./index-5cdee6ed.js";import"./index-756d1732.js";import"./index-11ae770f.js";import"./index-7069a893.js";import"./index-046c679b.js";import"./index-b9c452d6.js";import"./index-328ce4fc.js";import"./index-5b9b80c5.js";import"./index-a7d06282.js";import"./index-7eaad697.js";import"./index-ca0b38ae.js";import"./index-0f5f71d8.js";import"./index-18f0bfa9.js";import"./UL-ae71d882.js";import"./index-2a59ccac.js";import"./index-180ab7c4.js";import"./index-cf8204f2.js";import"./css-39caad62.js";import"./keyframes-dbb20f19.js";const l=p("div")`
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
