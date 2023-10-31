import{s as m}from"./index-6df8a466.js";import{A as l}from"./Theme-c9d85115.js";import"./index-049cff28.js";import{b as e,c as o}from"./entry-client-2ac2a0bd.js";import"./index-9f77492a.js";import"./index-5cdee6ed.js";import{D as p}from"./index-1f767762.js";import{B as c}from"./index-2e914305.js";import{C as d}from"./index-756d1732.js";import"./index-11ae770f.js";import"./index-7069a893.js";import"./index-046c679b.js";import"./index-b9c452d6.js";import"./index-328ce4fc.js";import"./index-5b9b80c5.js";import"./index-a7d06282.js";import"./index-7eaad697.js";import"./index-ca0b38ae.js";import"./index-0f5f71d8.js";import"./index-18f0bfa9.js";import"./UL-ae71d882.js";import{P as t,r as u}from"./index-2a59ccac.js";import"./index-180ab7c4.js";import"./index-cf8204f2.js";import{P as g}from"./PositionSelection-ab49b55d.js";import"./css-39caad62.js";import"./keyframes-dbb20f19.js";const P=m("div")`
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
