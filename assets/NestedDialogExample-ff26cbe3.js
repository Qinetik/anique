import{b as a,g as s,a as t,i as o,c as n,e as d,p,t as u}from"./entry-client-23914c21.js";import{B as c}from"./index-99dc85aa.js";import{c as g}from"./index-58ae8ba7.js";import"./index-6427a2f6.js";import{A}from"./Theme-c9d85115.js";import"./index-096f9d8e.js";import"./index-d1661098.js";import"./index-55909f5f.js";import"./index-70649c9c.js";import"./index-0715b131.js";import"./index-05916829.js";import"./index-c124aee2.js";import"./index-1740d0a2.js";import"./index-1cfc4eeb.js";import"./index-9fac0c6a.js";import"./index-7e2460ae.js";import"./index-4d1252b9.js";import"./index-a2a937ad.js";import"./index-4b012459.js";import"./index-e59065e4.js";import"./index-c19d27c0.js";import"./UnstyledLink-395be662.js";import"./index-54c0212b.js";import"./index-3fa64ce4.js";import"./index-075dc7a0.js";import{c as E}from"./css-26601209.js";import"./keyframes-59a403a9.js";const z=u("<div><!$><!/><!$><!/>"),_=u("<div><span>Close this one by clicking outside this dialog"),L=u("<div><!$><!/><!$><!/><!$><!/>"),m=l=>E`
    border-radius: 1em;
    background: ${A.colors.bg400};
    box-sizing: border-box;
    padding: ${l||"2em"};
    position: absolute;
    display: flex;
    gap: 1em;
`;function T(){const[l,f]=a(!1),[k,b]=a(!1),[x,h]=a(!1);return(()=>{const i=s(L),v=i.firstChild,[$,q]=t(v.nextSibling),D=$.nextSibling,[O,I]=t(D.nextSibling),N=O.nextSibling,[S,B]=t(N.nextSibling);return o(i,n(c,{onClick:e=>{f(r=>!r)},children:"Open Dialog"}),$,q),o(i,n(g,{onCloseRequest:()=>f(!1),isVisible:l,get children(){return[(()=>{const e=s(z),r=e.firstChild,[C,y]=t(r.nextSibling),R=C.nextSibling,[V,w]=t(R.nextSibling);return o(e,n(c,{onClick:()=>b(!0),children:"Open Nested outside"}),C,y),o(e,n(c,{onClick:()=>h(!0),children:"Open Nested within"}),V,w),d(()=>p(e,m()())),e})(),n(g,{onCloseRequest:()=>h(!1),isVisible:x,get children(){const e=s(_);return d(()=>p(e,m("8em")())),e}})]}}),O,I),o(i,n(g,{onCloseRequest:()=>b(!1),isVisible:k,get children(){const e=s(_);return d(()=>p(e,m("8em")())),e}}),S,B),i})()}T.code=`import {Button} from "@qinetik/anique/button";
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
