import{b as a,g as s,a as t,i as o,c as n,e as d,p,t as u}from"./entry-client-efb8f723.js";import{B as g}from"./index-01de8884.js";import{D as c}from"./index-14c4e9b6.js";import"./index-e694302e.js";import{A}from"./Theme-c9d85115.js";import"./index-149a8a7e.js";import"./index-299bfccf.js";import"./index-b09005ba.js";import"./index-d49a5ec8.js";import"./index-5b708f90.js";import"./index-1bac3de3.js";import"./index-0af3ff77.js";import"./index-74c14fc3.js";import"./index-2f6b9236.js";import"./index-ceddf797.js";import"./index-fc4b21a7.js";import"./index-38fd54ad.js";import"./index-18364d7e.js";import"./index-058de43f.js";import"./index-b793009e.js";import"./UL-596ed081.js";import"./index-a48d6eab.js";import"./index-0c52bc5d.js";import"./index-fb659094.js";import{c as E}from"./css-7a3f4315.js";import"./keyframes-17273c02.js";const z=u("<div><!$><!/><!$><!/>"),_=u("<div><span>Close this one by clicking outside this dialog"),L=u("<div><!$><!/><!$><!/><!$><!/>"),m=l=>E`
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
