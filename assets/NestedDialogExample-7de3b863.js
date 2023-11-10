import{b as a,g as o,a as t,i as s,c as n,e as p,q as d,t as u}from"./entry-client-fa648c77.js";import{B as m}from"./index-ebcf5fc7.js";import{D as c}from"./index-fb0f364b.js";import"./index-5be97176.js";import{A as E}from"./Theme-c9d85115.js";import"./index-a3de9b85.js";import"./index-906196f8.js";import"./index-738815bd.js";import"./index-a21d93e6.js";import"./index-eba976b2.js";import"./index-58fbaa55.js";import"./index-a7e4fca9.js";import"./index-9ecd4929.js";import"./index-a4a13cad.js";import"./index-2e5e112a.js";import"./index-cf2526ba.js";import"./index-5056258d.js";import"./index-519a8c4a.js";import"./index-87410e23.js";import"./index-2434b60c.js";import"./index-756cf6ab.js";import"./UnstyledLink-08d09b7e.js";import"./index-eaf0e709.js";import"./index-7e475d78.js";import"./index-47d93bee.js";import"./index-498a4fb2.js";import{c as w}from"./css-6ecff688.js";import"./keyframes-f5879c2d.js";const z=u("<div><!$><!/><!$><!/>"),h=u("<div><span>Close this one by clicking outside this dialog"),j=u("<div><!$><!/><!$><!/><!$><!/>"),g=l=>w`
    border-radius: 1em;
    background: ${E.colors.bg400};
    box-sizing: border-box;
    padding: ${l||"2em"};
    position: absolute;
    display: flex;
    gap: 1em;
`;function M(){const[l,b]=a(!1),[x,f]=a(!1),[q,$]=a(!1);return(()=>{const i=o(j),k=i.firstChild,[O,v]=t(k.nextSibling),D=O.nextSibling,[C,S]=t(D.nextSibling),I=C.nextSibling,[N,B]=t(I.nextSibling);return s(i,n(m,{onClick:e=>{b(r=>!r)},children:"Open Dialog"}),O,v),s(i,n(c,{onCloseRequest:()=>b(!1),isVisible:l,get children(){return[(()=>{const e=o(z),r=e.firstChild,[_,R]=t(r.nextSibling),V=_.nextSibling,[y,A]=t(V.nextSibling);return s(e,n(m,{onClick:()=>f(!0),children:"Open Nested outside"}),_,R),s(e,n(m,{onClick:()=>$(!0),children:"Open Nested within"}),y,A),p(()=>d(e,g()())),e})(),n(c,{onCloseRequest:()=>$(!1),isVisible:q,get children(){const e=o(h);return p(()=>d(e,g("8em")())),e}})]}}),C,S),s(i,n(c,{onCloseRequest:()=>f(!1),isVisible:x,get children(){const e=o(h);return p(()=>d(e,g("8em")())),e}}),N,B),i})()}M.code=`import {Button} from "@qinetik/anique/button";
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
