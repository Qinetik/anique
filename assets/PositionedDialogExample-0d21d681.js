import{s as m}from"./index-6427a2f6.js";import{A as l}from"./Theme-c9d85115.js";import"./index-096f9d8e.js";import{b as e,c as o}from"./entry-client-23914c21.js";import"./index-d1661098.js";import"./index-55909f5f.js";import{c as p}from"./index-58ae8ba7.js";import{B as c}from"./index-99dc85aa.js";import"./index-70649c9c.js";import{C as d}from"./index-0715b131.js";import"./index-05916829.js";import"./index-c124aee2.js";import"./index-1740d0a2.js";import"./index-1cfc4eeb.js";import"./index-9fac0c6a.js";import"./index-7e2460ae.js";import"./index-4d1252b9.js";import"./index-a2a937ad.js";import"./index-4b012459.js";import"./index-e59065e4.js";import"./index-c19d27c0.js";import"./UnstyledLink-395be662.js";import{P as t,r as u}from"./index-54c0212b.js";import"./index-3fa64ce4.js";import"./index-075dc7a0.js";import{P as g}from"./PositionSelection-a7e862c7.js";import"./css-26601209.js";import"./keyframes-59a403a9.js";const P=m("div")`
    border-radius: 1em;
    background: ${l.colors.bg400};
    box-sizing: border-box;
    padding: 2em;
    position: absolute;
`;function f(){const[r,n]=e(!1),[i,s]=e(t.TopLeft);return o(d,{gap:"0.5em",get children(){return[o(g,{activePosition:i,setActivePosition:s}),o(c,{onClick:v=>n(a=>!a),children:"Open Dialog"}),o(p,{onCloseRequest:()=>n(!1),isVisible:r,relative:!0,get children(){return o(P,{get style(){return{...u(i(),i()!=t.Center?"1em":"0",i()!=t.Center?"1em":"0")}},children:"This is a positioned dialog"})}})]}})}f.code=`import {Anique, Column} from "@qinetik/anique";
import {PositionSelector} from "../../../../solid/components/PositionSelection";
import {Button} from "@qinetik/anique/button";
import {createSignal} from "solid-js";
import {Position, relativePositionStyle} from "@qinetik/anique/utils";
import {Dialog} from "@qinetik/anique/dialog";
import {styled} from "@qinetik/emotion";

const DialogContent = styled("div")\`
    border-radius: 1em;
    background: \${Anique.colors.bg400};
    box-sizing: border-box;
    padding: 2em;
    position: absolute;
\`

export default function PositionedDialogExample() {
    const [is2ndOpen, setIs2ndOpen] = createSignal(false)
    const [activePosition, setActivePosition] = createSignal(Position.TopLeft);
    return (
        <Column gap={"0.5em"}>
            <PositionSelector
                activePosition={activePosition}
                setActivePosition={setActivePosition}
            />
            <Button onClick={(e) => setIs2ndOpen((o) => !o)}>Open Dialog</Button>
            <Dialog
                onCloseRequest={() => setIs2ndOpen(false)}
                isVisible={is2ndOpen}
                relative
            >
                <DialogContent
                    style={{
                        ...relativePositionStyle(activePosition(), activePosition() != Position.Center ? "1em" : "0", activePosition() != Position.Center ? "1em" : "0")
                    }}
                >
                    This is a positioned dialog
                </DialogContent>
            </Dialog>
        </Column>
    )
}`;export{f as default};
