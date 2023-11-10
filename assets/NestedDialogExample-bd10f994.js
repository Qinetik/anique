import{b as a,g as o,a as t,i as s,c as n,e as p,q as d,t as u}from"./entry-client-f8a4ae77.js";import{B as m}from"./index-950dbaca.js";import{c}from"./index-c2ccd6b4.js";import"./index-1349e2ee.js";import{A as E}from"./Theme-c9d85115.js";import"./index-9faa6ccb.js";import"./index-e26dcbaa.js";import"./index-c7e055fe.js";import"./index-790f0904.js";import"./index-459eedf5.js";import"./index-5487e511.js";import"./index-69169d02.js";import"./index-2ccff704.js";import"./index-87c6ec70.js";import"./index-3bfb6c94.js";import"./index-02608a48.js";import"./index-57c7de99.js";import"./index-64764018.js";import"./index-04f85821.js";import"./index-85412099.js";import"./index-cbf5d0c2.js";import"./UnstyledLink-d0c164d4.js";import"./index-b8dd5fd3.js";import"./index-6f1cfc45.js";import"./index-a8521333.js";import{c as w}from"./css-37145586.js";import"./keyframes-5ac2df48.js";const z=u("<div><!$><!/><!$><!/>"),h=u("<div><span>Close this one by clicking outside this dialog"),j=u("<div><!$><!/><!$><!/><!$><!/>"),g=l=>w`
    border-radius: 1em;
    background: ${E.colors.bg400};
    box-sizing: border-box;
    padding: ${l||"2em"};
    position: absolute;
    display: flex;
    gap: 1em;
`;function M(){const[l,b]=a(!1),[x,f]=a(!1),[q,$]=a(!1);return(()=>{const i=o(j),k=i.firstChild,[O,v]=t(k.nextSibling),S=O.nextSibling,[C,D]=t(S.nextSibling),I=C.nextSibling,[N,B]=t(I.nextSibling);return s(i,n(m,{onClick:e=>{b(r=>!r)},children:"Open Dialog"}),O,v),s(i,n(c,{onCloseRequest:()=>b(!1),isVisible:l,get children(){return[(()=>{const e=o(z),r=e.firstChild,[_,R]=t(r.nextSibling),V=_.nextSibling,[y,A]=t(V.nextSibling);return s(e,n(m,{onClick:()=>f(!0),children:"Open Nested outside"}),_,R),s(e,n(m,{onClick:()=>$(!0),children:"Open Nested within"}),y,A),p(()=>d(e,g()())),e})(),n(c,{onCloseRequest:()=>$(!1),isVisible:q,get children(){const e=o(h);return p(()=>d(e,g("8em")())),e}})]}}),C,D),s(i,n(c,{onCloseRequest:()=>f(!1),isVisible:x,get children(){const e=o(h);return p(()=>d(e,g("8em")())),e}}),N,B),i})()}M.code=`import {Button} from "@qinetik/anique/button";
import {Dialog} from "@qinetik/anique/dialog";
import {createSignal} from "solid-js";
import {Anique} from "@qinetik/anique";
import {css} from "@qinetik/emotion";

const dialogContent = (padding ?: string) => css\`
    border-radius: 1em;
    background: \${Anique.colors.bg400};
    box-sizing: border-box;
    padding: \${padding || "2em"};
    position: absolute;
    display: flex;
    gap: 1em;
\`

export default function NestedDialogExample() {

    const [is1stOpen, setIs1stOpen] = createSignal(false)
    const [is2ndOpen, setIs2ndOpen] = createSignal(false)
    const [is3rdOpen, setIs3rdOpen] = createSignal(false)

    return (
        <div>
            <Button onClick={(e) => {
                setIs1stOpen(v => !v)
            }}>Open Dialog</Button>

            <Dialog
                onCloseRequest={() => setIs1stOpen(false)}
                isVisible={is1stOpen}
            >
                <div class={dialogContent()()}>
                    <Button onClick={() => setIs2ndOpen(true)}>Open Nested outside</Button>
                    <Button onClick={() => setIs3rdOpen(true)}>Open Nested within</Button>
                </div>

                {/* Nested dialog that is inside the parent dialog */}
                <Dialog
                    onCloseRequest={() => setIs3rdOpen(false)}
                    isVisible={is3rdOpen}
                >
                    <div class={dialogContent("8em")()}>
                        <span>Close this one by clicking outside this dialog</span>
                    </div>
                </Dialog>

            </Dialog>

            {/* Nested dialog that is outside the parent dialog */}
            <Dialog
                onCloseRequest={() => setIs2ndOpen(false)}
                isVisible={is2ndOpen}
            >
                <div class={dialogContent("8em")()}>
                    <span>Close this one by clicking outside this dialog</span>
                </div>
            </Dialog>

        </div>
    )
}`;export{M as default};
