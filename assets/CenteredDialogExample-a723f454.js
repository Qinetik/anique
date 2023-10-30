import{B as r}from"./index-fe490c73.js";import{D as s}from"./index-b3c017de.js";import{b as a,c as n,f as e}from"./entry-client-a96cbc4d.js";import{s as p}from"./index-755bc77f.js";import{A as m}from"./Theme-c9d85115.js";import"./index-9b146908.js";import"./index-0f3f083d.js";import"./index-41256d2f.js";import"./index-df837084.js";import"./index-0b90490a.js";import"./index-1fc8dcd4.js";import"./index-2ede3e13.js";import"./index-1573e59b.js";import"./index-6baed7d3.js";import"./index-69f01235.js";import"./index-b49aba21.js";import"./index-d2d6e189.js";import"./index-8ce3d155.js";import"./index-ffe50960.js";import"./index-2f2b9ad8.js";import"./UL-412bb8d8.js";import"./index-0e33e01a.js";import"./index-3bdeeb8b.js";import"./index-e3dc129e.js";import"./css-884efc55.js";import"./keyframes-bd3d6767.js";const l=p("div")`
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
