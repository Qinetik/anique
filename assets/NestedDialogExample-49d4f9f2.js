import{b as a,g as s,a as t,i as o,c as n,e as d,p,t as u}from"./entry-client-b1cdb755.js";import{B as c}from"./index-69b2c138.js";import{c as g}from"./index-8f15c368.js";import"./index-123f5b0d.js";import{A}from"./Theme-c9d85115.js";import"./index-8e5bd437.js";import"./index-b3b79d55.js";import"./index-9819aab5.js";import"./index-072e3436.js";import"./index-6bcccf20.js";import"./index-b9566db1.js";import"./index-023d75c5.js";import"./index-2758a2ec.js";import"./index-70c7726a.js";import"./index-11fb7b74.js";import"./index-f7f81b39.js";import"./index-fe3b8c3b.js";import"./index-2c8603ad.js";import"./index-15598541.js";import"./index-0be5e0ec.js";import"./index-a1f40fe4.js";import"./UnstyledLink-f3bad3fa.js";import"./index-f148c6eb.js";import"./index-96651276.js";import"./index-01a819b4.js";import{c as E}from"./css-b493a813.js";import"./keyframes-e9a77a12.js";const z=u("<div><!$><!/><!$><!/>"),_=u("<div><span>Close this one by clicking outside this dialog"),L=u("<div><!$><!/><!$><!/><!$><!/>"),m=l=>E`
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
