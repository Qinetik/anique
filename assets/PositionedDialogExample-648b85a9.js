import{s as m}from"./index-755bc77f.js";import{A as l}from"./Theme-c9d85115.js";import"./index-9b146908.js";import{b as e,c as o}from"./entry-client-a96cbc4d.js";import"./index-0f3f083d.js";import"./index-41256d2f.js";import{D as p}from"./index-b3c017de.js";import{B as c}from"./index-fe490c73.js";import{C as d}from"./index-df837084.js";import"./index-0b90490a.js";import"./index-1fc8dcd4.js";import"./index-2ede3e13.js";import"./index-1573e59b.js";import"./index-6baed7d3.js";import"./index-69f01235.js";import"./index-b49aba21.js";import"./index-d2d6e189.js";import"./index-8ce3d155.js";import"./index-ffe50960.js";import"./index-2f2b9ad8.js";import"./UL-412bb8d8.js";import{P as t,r as u}from"./index-0e33e01a.js";import"./index-3bdeeb8b.js";import"./index-e3dc129e.js";import{P as g}from"./PositionSelection-b1c2d7fa.js";import"./css-884efc55.js";import"./keyframes-bd3d6767.js";const P=m("div")`
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
