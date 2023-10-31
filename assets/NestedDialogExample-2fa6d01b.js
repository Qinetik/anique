import{b as a,g as s,a as t,i as o,c as n,e as d,p,t as u}from"./entry-client-2ac2a0bd.js";import{B as g}from"./index-2e914305.js";import{D as c}from"./index-1f767762.js";import"./index-6df8a466.js";import{A}from"./Theme-c9d85115.js";import"./index-049cff28.js";import"./index-9f77492a.js";import"./index-5cdee6ed.js";import"./index-756d1732.js";import"./index-11ae770f.js";import"./index-7069a893.js";import"./index-046c679b.js";import"./index-b9c452d6.js";import"./index-328ce4fc.js";import"./index-5b9b80c5.js";import"./index-a7d06282.js";import"./index-7eaad697.js";import"./index-ca0b38ae.js";import"./index-0f5f71d8.js";import"./index-18f0bfa9.js";import"./UL-ae71d882.js";import"./index-2a59ccac.js";import"./index-180ab7c4.js";import"./index-cf8204f2.js";import{c as E}from"./css-39caad62.js";import"./keyframes-dbb20f19.js";const z=u("<div><!$><!/><!$><!/>"),_=u("<div><span>Close this one by clicking outside this dialog"),L=u("<div><!$><!/><!$><!/><!$><!/>"),m=l=>E`
    border-radius: 1em;
    background: ${A.colors.bg400};
    box-sizing: border-box;
    padding: ${l||"2em"};
    position: absolute;
    display: flex;
    gap: 1em;
`;function T(){const[l,f]=a(!1),[k,b]=a(!1),[x,h]=a(!1);return(()=>{const i=s(L),v=i.firstChild,[$,q]=t(v.nextSibling),D=$.nextSibling,[O,I]=t(D.nextSibling),N=O.nextSibling,[S,B]=t(N.nextSibling);return o(i,n(g,{onClick:e=>{f(r=>!r)},children:"Open Dialog"}),$,q),o(i,n(c,{onCloseRequest:()=>f(!1),isVisible:l,get children(){return[(()=>{const e=s(z),r=e.firstChild,[C,y]=t(r.nextSibling),R=C.nextSibling,[V,w]=t(R.nextSibling);return o(e,n(g,{onClick:()=>b(!0),children:"Open Nested outside"}),C,y),o(e,n(g,{onClick:()=>h(!0),children:"Open Nested within"}),V,w),d(()=>p(e,m()())),e})(),n(c,{onCloseRequest:()=>h(!1),isVisible:x,get children(){const e=s(_);return d(()=>p(e,m("8em")())),e}})]}}),O,I),o(i,n(c,{onCloseRequest:()=>b(!1),isVisible:k,get children(){const e=s(_);return d(()=>p(e,m("8em")())),e}}),S,B),i})()}T.code=`import {Button} from "@qinetik/anique/button";
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

                // By default, Dialog tracks its direct children dialog and avoids closing if there are open dialogs inside it,
                // You can control this using doNotTrackChildren which prevents this behavior and debugLog provides helpful logs in console
                // If you are not going to use nested dialogs, pass false to stop tracking children, which might improve performance

                // doNotTrackChildren={true}
                // debugLog={true}
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
}`;export{T as default};
