import{B as r}from"./index-69b2c138.js";import{c as s}from"./index-8f15c368.js";import{b as a,c as n,f as e}from"./entry-client-b1cdb755.js";import{s as p}from"./index-123f5b0d.js";import{A as m}from"./Theme-c9d85115.js";import"./index-8e5bd437.js";import"./index-b3b79d55.js";import"./index-9819aab5.js";import"./index-072e3436.js";import"./index-6bcccf20.js";import"./index-b9566db1.js";import"./index-023d75c5.js";import"./index-2758a2ec.js";import"./index-70c7726a.js";import"./index-11fb7b74.js";import"./index-f7f81b39.js";import"./index-fe3b8c3b.js";import"./index-2c8603ad.js";import"./index-15598541.js";import"./index-0be5e0ec.js";import"./index-a1f40fe4.js";import"./UnstyledLink-f3bad3fa.js";import"./index-f148c6eb.js";import"./index-96651276.js";import"./index-01a819b4.js";import"./css-b493a813.js";import"./keyframes-e9a77a12.js";const l=p("div")`
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
