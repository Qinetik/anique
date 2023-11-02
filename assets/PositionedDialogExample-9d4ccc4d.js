import{s as m}from"./index-94caafb4.js";import{A as l}from"./Theme-c9d85115.js";import"./index-bab6a310.js";import{b as e,c as o}from"./entry-client-3af6d313.js";import"./index-c5bef6b0.js";import"./index-cfa94871.js";import{D as p}from"./index-1830aefe.js";import{B as c}from"./index-6d8184a4.js";import{C as d}from"./index-f6f07d1f.js";import"./index-c4ee8099.js";import"./index-9d7cf436.js";import"./index-67eb7d25.js";import"./index-98966c2c.js";import"./index-5ba1b5d6.js";import"./index-51d3af24.js";import"./index-f7946e34.js";import"./index-68b47e9b.js";import"./index-7ed7999b.js";import"./index-7355db2b.js";import"./index-e32cadde.js";import"./UL-e6a4a899.js";import{P as t,r as u}from"./index-760a4f67.js";import"./index-24296090.js";import"./index-1bde3f1a.js";import{P as g}from"./PositionSelection-ca154e9b.js";import"./css-e90cefea.js";import"./keyframes-6d33a2dc.js";const P=m("div")`
    border-radius: 1em;
    background: ${l.colors.bg400};
    box-sizing: border-box;
    padding: 2em;
    position: absolute;
`;function f(){const[s,n]=e(!1),[i,r]=e(t.TopLeft);return o(d,{gap:"0.5em",get children(){return[o(g,{activePosition:i,setActivePosition:r}),o(c,{onClick:v=>n(a=>!a),children:"Open Dialog"}),o(p,{onCloseRequest:()=>n(!1),isVisible:s,relative:!0,get children(){return o(P,{get style(){return{...u(i(),i()!=t.Center?"1em":"0",i()!=t.Center?"1em":"0")}},children:"This is a positioned dialog"})}})]}})}f.code=`import {Anique, Column} from "@qinetik/anique";
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
