import{s as m}from"./index-bb5a5d3d.js";import{A as l}from"./Theme-c9d85115.js";import"./index-50dde1b3.js";import{b as e,c as o}from"./entry-client-2fda6d46.js";import"./index-d65ca23f.js";import"./index-880dcc90.js";import{D as p}from"./index-8c496293.js";import{B as c}from"./index-7a43a4af.js";import{C as d}from"./index-e7aa7392.js";import"./index-f62fd80e.js";import"./index-d1f62f4a.js";import"./index-710de314.js";import"./index-a88f9566.js";import"./index-b47d8711.js";import"./index-78db38af.js";import"./index-7a2b10b5.js";import"./index-57b39e9e.js";import"./index-04a91ab9.js";import"./index-31fb525c.js";import"./index-f6060dd8.js";import"./UL-a265d12a.js";import{P as t,r as u}from"./index-11ea25b9.js";import"./index-d7a2bb4c.js";import"./index-927437be.js";import{P as g}from"./PositionSelection-9f41853c.js";import"./css-a2b805a8.js";import"./keyframes-489867ef.js";const P=m("div")`
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
