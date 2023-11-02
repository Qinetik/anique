import{s as m}from"./index-e694302e.js";import{A as l}from"./Theme-c9d85115.js";import"./index-149a8a7e.js";import{b as e,c as o}from"./entry-client-efb8f723.js";import"./index-299bfccf.js";import"./index-b09005ba.js";import{D as p}from"./index-14c4e9b6.js";import{B as c}from"./index-01de8884.js";import{C as d}from"./index-d49a5ec8.js";import"./index-5b708f90.js";import"./index-1bac3de3.js";import"./index-0af3ff77.js";import"./index-74c14fc3.js";import"./index-2f6b9236.js";import"./index-ceddf797.js";import"./index-fc4b21a7.js";import"./index-38fd54ad.js";import"./index-18364d7e.js";import"./index-058de43f.js";import"./index-b793009e.js";import"./UL-596ed081.js";import{P as t,r as u}from"./index-a48d6eab.js";import"./index-0c52bc5d.js";import"./index-fb659094.js";import{P as g}from"./PositionSelection-30e92b84.js";import"./css-7a3f4315.js";import"./keyframes-17273c02.js";const P=m("div")`
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
