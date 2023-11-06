import{s as m}from"./index-123f5b0d.js";import{A as l}from"./Theme-c9d85115.js";import"./index-8e5bd437.js";import{b as e,c as o}from"./entry-client-b1cdb755.js";import"./index-b3b79d55.js";import"./index-9819aab5.js";import{c as p}from"./index-8f15c368.js";import{B as c}from"./index-69b2c138.js";import"./index-072e3436.js";import{C as d}from"./index-6bcccf20.js";import"./index-b9566db1.js";import"./index-023d75c5.js";import"./index-2758a2ec.js";import"./index-70c7726a.js";import"./index-11fb7b74.js";import"./index-f7f81b39.js";import"./index-fe3b8c3b.js";import"./index-2c8603ad.js";import"./index-15598541.js";import"./index-0be5e0ec.js";import"./index-a1f40fe4.js";import"./UnstyledLink-f3bad3fa.js";import{P as t,r as u}from"./index-f148c6eb.js";import"./index-96651276.js";import"./index-01a819b4.js";import{P as g}from"./PositionSelection-ab6c9ecd.js";import"./css-b493a813.js";import"./keyframes-e9a77a12.js";const P=m("div")`
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
